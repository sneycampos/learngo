// Build script - Bundles JS dependencies for faster loading
const fs = require('fs');
const path = require('path');

console.log('🚀 Building Go Learn bundle...\n');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

console.log('📦 Bundling JavaScript dependencies...\n');

// Bundle JS dependencies
const jsBundle = [];

// 1. Add Marked.js (UMD version for browser)
const markedPath = path.join(path.dirname(require.resolve('marked')), 'marked.umd.js');
jsBundle.push(fs.readFileSync(markedPath, 'utf8'));
console.log('  ✓ marked.js (UMD)');

// 2. Add Prism.js core
const prismPath = require.resolve('prismjs');
jsBundle.push(fs.readFileSync(prismPath, 'utf8'));
console.log('  ✓ prism.js');

// 3. Add Prism Go component
const prismGoPath = path.join(path.dirname(prismPath), 'components/prism-go.js');
jsBundle.push(fs.readFileSync(prismGoPath, 'utf8'));
console.log('  ✓ prism-go.js');

// 4. Add content cache
const contentDir = path.join(__dirname, 'content');
const contentFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
const contentMap = {};

for (const file of contentFiles) {
  const topicId = path.basename(file, '.md');
  const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
  contentMap[topicId] = content;
}

jsBundle.push(`\n// Auto-generated content cache\nconst CONTENT_CACHE = ${JSON.stringify(contentMap, null, 2)};`);
console.log(`  ✓ Embedded ${Object.keys(contentMap).length} markdown files`);

// 5. Add app.js (modified to not depend on globals)
let appJs = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');

// Remove the marked.setOptions since marked is now bundled
// Match from "// Configure marked.js..." comment through the entire setOptions block
appJs = appJs.replace(/\/\/ Configure marked\.js with Prism syntax highlighting\nmarked\.setOptions\(\{[\s\S]*?\}\);\n/, '');

// Update loadTopic function to use embedded content
const originalLoadTopic = `// Load and render a topic\nasync function loadTopic(topicId) {\n  const topic = topicManifest.topics.find(t => t.id === topicId);\n  if (!topic) return;\n  \n  currentTopicIndex = topicManifest.topics.findIndex(t => t.id === topicId);\n  \n  // Show topic view\n  document.getElementById('home-view').classList.add('hidden');\n  document.getElementById('topic-view').classList.remove('hidden');\n  updateNavState('topics');\n  \n  // Load markdown content\n  const contentDiv = document.getElementById('topic-content');\n  contentDiv.innerHTML = '<div class="flex items-center justify-center py-12"><div class="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div></div>';\n  \n  try {\n    const response = await fetch(\`content/\${topicId}.md\`);\n    if (!response.ok) throw new Error('Failed to load');\n    \n    let markdown = await response.text();`;

const newLoadTopic = `// Load and render a topic (BUNDLED - embedded content)\nasync function loadTopic(topicId) {\n  const topic = topicManifest.topics.find(t => t.id === topicId);\n  if (!topic) return;\n  \n  currentTopicIndex = topicManifest.topics.findIndex(t => t.id === topicId);\n  \n  // Show topic view\n  document.getElementById('home-view').classList.add('hidden');\n  document.getElementById('topic-view').classList.remove('hidden');\n  updateNavState('topics');\n  \n  // Load markdown content from embedded cache (INSTANT - no fetch!)\n  const contentDiv = document.getElementById('topic-content');\n  \n  try {\n    // Use pre-loaded content instead of fetching\n    let markdown = CONTENT_CACHE[topicId];\n    if (!markdown) throw new Error('Content not found');`;

appJs = appJs.replace(originalLoadTopic, newLoadTopic);

// Remove the fetch error handling line and update it
appJs = appJs.replace(`  } catch (error) {\n    contentDiv.innerHTML = \`<div class="text-center py-12 text-gray-500"><p>Failed to load topic content.</p></div>\`;`, `  } catch (error) {\n    contentDiv.innerHTML = \`<div class="text-center py-12 text-gray-500"><p>Failed to load topic content: \${error.message}</p></div>\`;`);

// Configure marked with Prism
appJs = `// Configure marked with Prism\nmarked.setOptions({\n  highlight: function(code, lang) {\n    if (lang && Prism.languages[lang]) {\n      return Prism.highlight(code, Prism.languages[lang], lang);\n    }\n    return code;\n  },\n  langPrefix: 'language-'\n});\n\n` + appJs;

jsBundle.push('\n' + appJs);

// Write bundled JS
fs.writeFileSync(path.join(distDir, 'bundle.js'), jsBundle.join('\n'));
console.log('\n✅ Created bundle.js');

// Copy and update index.html
console.log('\n📄 Processing index.html...');
let indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Remove CDN scripts that we're bundling
indexHtml = indexHtml.replace(/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/marked\/marked\.min\.js"><\/script>\n/, '');
indexHtml = indexHtml.replace(/<link href="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/prism\/1\.29\.0\/themes\/prism-tomorrow\.min\.css" rel="stylesheet" \/>\n/, '');
indexHtml = indexHtml.replace(/<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/prism\/1\.29\.0\/prism\.min\.js"><\/script>\n/, '');
indexHtml = indexHtml.replace(/<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/prism\/1\.29\.0\/components\/prism-go\.min\.js"><\/script>\n/, '');

// Replace app.js with bundle.js
indexHtml = indexHtml.replace('<script src="app.js"></script>', '<script src="bundle.js"></script>');

// Keep Tailwind CDN for now (it's the most reliable way)
// But we could remove it if we set up proper Tailwind build

fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);
console.log('✅ Created index.html');

// Add Prism theme CSS inline
console.log('\n🎨 Adding Prism theme to HTML...');
const prismThemePath = path.join(path.dirname(prismPath), 'themes/prism-tomorrow.css');
const prismTheme = fs.readFileSync(prismThemePath, 'utf8');

indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
indexHtml = indexHtml.replace(
  '</style>',
  '\n/* Prism Tomorrow Theme */\n' + prismTheme + '\n</style>'
);
fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);
console.log('✅ Added Prism theme to HTML');

console.log('\n🎉 Build complete!\n');
console.log('Removed CDNs:');
console.log('  ✓ marked.js (bundled)');
console.log('  ✓ prism.js (bundled)');
console.log('  ✓ prism-go.js (bundled)');
console.log('\nKept for reliability:');
console.log('  • Tailwind CSS CDN');
console.log('  • Google Fonts');
console.log('\nTo test locally:');
console.log('  npm run preview');
