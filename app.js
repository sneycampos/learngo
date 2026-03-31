import './src/styles.css';
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-go';
import 'prismjs/themes/prism-tomorrow.css';

const topicContentModules = import.meta.glob('./content/*.md', {
  query: '?raw',
  import: 'default'
});

// Go Learn - Markdown-based Go Learning Site

// Configure marked.js with Prism syntax highlighting
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && Prism.languages[lang]) {
      return Prism.highlight(code, Prism.languages[lang], lang);
    }
    return code;
  },
  langPrefix: 'language-'
});

// Topic manifest - defines the structure and order of topics
const topicManifest = {
  categories: {
    basics: { name: 'Basics', description: 'Core language features and syntax', color: '#0070f3', icon: 'code' },
    concurrency: { name: 'Concurrency', description: 'Goroutines, channels, and synchronization', color: '#00c853', icon: 'terminal' },
    stdlib: { name: 'Standard Library', description: 'Common packages from the standard library', color: '#ff6d00', icon: 'book' }
  },
  topics: [
    // Basics
    { id: 'hello-world', title: 'Hello World', category: 'basics', description: 'The traditional first program' },
    { id: 'values', title: 'Values', category: 'basics', description: 'Strings, integers, floats, booleans' },
    { id: 'variables', title: 'Variables', category: 'basics', description: 'Declaring and initializing variables' },
    { id: 'constants', title: 'Constants', category: 'basics', description: 'Constant values that cannot change' },
    { id: 'for', title: 'For Loop', category: 'basics', description: 'The only looping construct in Go' },
    { id: 'range-over-integers', title: 'Range Over Integers', category: 'basics', description: 'Clean iteration syntax for N times', badge: '1.22+' },
    { id: 'if-else', title: 'If/Else', category: 'basics', description: 'Conditional branching' },
    { id: 'switch', title: 'Switch', category: 'basics', description: 'Multi-way conditional statements' },
    { id: 'arrays', title: 'Arrays', category: 'basics', description: 'Fixed-size sequences' },
    { id: 'slices', title: 'Slices', category: 'basics', description: 'Dynamic views into arrays' },
    { id: 'maps', title: 'Maps', category: 'basics', description: 'Key-value data structures' },
    { id: 'iterators', title: 'Iterators', category: 'basics', description: 'User-defined iteration sequences', badge: '1.23+' },
    { id: 'functions', title: 'Functions', category: 'basics', description: 'Defining and calling functions' },
    { id: 'multiple-return-values', title: 'Multiple Return Values', category: 'basics', description: 'Functions returning multiple values' },
    { id: 'variadic-functions', title: 'Variadic Functions', category: 'basics', description: 'Variable number of arguments' },
    { id: 'closures', title: 'Closures', category: 'basics', description: 'Anonymous functions with captured state' },
    { id: 'recursion', title: 'Recursion', category: 'basics', description: 'Functions calling themselves' },
    { id: 'pointers', title: 'Pointers', category: 'basics', description: 'Memory addresses and dereferencing' },
    { id: 'structs', title: 'Structs', category: 'basics', description: 'Composite data types' },
    { id: 'methods', title: 'Methods', category: 'basics', description: 'Functions attached to types' },
    { id: 'interfaces', title: 'Interfaces', category: 'basics', description: 'Defining behavior through methods' },
    { id: 'errors', title: 'Errors', category: 'basics', description: 'Error handling in Go' },
    
    // Concurrency
    { id: 'goroutines', title: 'Goroutines', category: 'concurrency', description: 'Lightweight concurrent execution' },
    { id: 'channels', title: 'Channels', category: 'concurrency', description: 'Communication between goroutines' },
    { id: 'channel-buffering', title: 'Channel Buffering', category: 'concurrency', description: 'Buffered channels for async communication' },
    { id: 'select', title: 'Select', category: 'concurrency', description: 'Multiplexing channel operations' },
    { id: 'timeouts', title: 'Timeouts', category: 'concurrency', description: 'Handling timeouts with select' },
    { id: 'worker-pools', title: 'Worker Pools', category: 'concurrency', description: 'Concurrent worker goroutines' },
    { id: 'waitgroups', title: 'WaitGroups', category: 'concurrency', description: 'Waiting for goroutines to complete' },
    { id: 'mutexes', title: 'Mutexes', category: 'concurrency', description: 'Mutual exclusion for safe access' },
    
    // Standard Library
    { id: 'sorting', title: 'Sorting', category: 'stdlib', description: 'Sorting slices and collections' },
    { id: 'panic', title: 'Panic', category: 'stdlib', description: 'Handling unrecoverable errors' },
    { id: 'defer', title: 'Defer', category: 'stdlib', description: 'Delaying function execution' },
    { id: 'recover', title: 'Recover', category: 'stdlib', description: 'Catching panics' },
    { id: 'string-functions', title: 'String Functions', category: 'stdlib', description: 'Common string operations' },
    { id: 'string-formatting', title: 'String Formatting', category: 'stdlib', description: 'Formatting with fmt' },
    { id: 'json', title: 'JSON', category: 'stdlib', description: 'Encoding and decoding JSON' },
    { id: 'time', title: 'Time', category: 'stdlib', description: 'Working with dates and times' },
    { id: 'random-numbers', title: 'Random Numbers', category: 'stdlib', description: 'Generating random numbers' },
    { id: 'unique', title: 'Unique Values', category: 'stdlib', description: 'Value canonicalization and interning', badge: '1.23+' },
    { id: 'number-parsing', title: 'Number Parsing', category: 'stdlib', description: 'Converting strings to numbers' },
    { id: 'url-parsing', title: 'URL Parsing', category: 'stdlib', description: 'Parsing and building URLs' },
    { id: 'reading-files', title: 'Reading Files', category: 'stdlib', description: 'Reading file contents' },
    { id: 'writing-files', title: 'Writing Files', category: 'stdlib', description: 'Writing data to files' },
    { id: 'line-filters', title: 'Line Filters', category: 'stdlib', description: 'Processing text line by line' },
    { id: 'command-line-arguments', title: 'Command-Line Arguments', category: 'stdlib', description: 'Accessing CLI arguments' },
    { id: 'command-line-flags', title: 'Command-Line Flags', category: 'stdlib', description: 'Parsing CLI flags' },
    { id: 'environment-variables', title: 'Environment Variables', category: 'stdlib', description: 'Reading env variables' },
    { id: 'http-client', title: 'HTTP Client', category: 'stdlib', description: 'Making HTTP requests' },
    { id: 'http-server', title: 'HTTP Server', category: 'stdlib', description: 'Building HTTP servers' },
    { id: 'signals', title: 'Signals', category: 'stdlib', description: 'Handling OS signals' },
    { id: 'exit', title: 'Exit', category: 'stdlib', description: 'Terminating with exit codes' }
  ]
};

// State
let currentTopicIndex = -1;
let expandedCategories = new Set(['basics', 'concurrency', 'stdlib']);
const READ_PROGRESS_KEY = 'golearn.readTopics.v1';
let readTopicIds = new Set();

function loadReadProgress() {
  try {
    const saved = localStorage.getItem(READ_PROGRESS_KEY);
    if (!saved) return;
    const ids = JSON.parse(saved);
    if (Array.isArray(ids)) {
      readTopicIds = new Set(ids);
    }
  } catch (error) {
    console.warn('Failed to load read progress:', error);
  }
}

function saveReadProgress() {
  localStorage.setItem(READ_PROGRESS_KEY, JSON.stringify(Array.from(readTopicIds)));
}

function isTopicRead(topicId) {
  return readTopicIds.has(topicId);
}

function markTopicRead(topicId) {
  if (readTopicIds.has(topicId)) return false;
  readTopicIds.add(topicId);
  saveReadProgress();
  return true;
}

function getReadCount() {
  return readTopicIds.size;
}

function getReadCountByCategory(categoryId) {
  return topicManifest.topics.filter(t => t.category === categoryId && isTopicRead(t.id)).length;
}

// Initialize
async function init() {
  loadReadProgress();
  renderHome();
  renderSidebar();
  renderMobileMenu();
  updateStats();
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
      e.preventDefault();
      toggleSidebar();
    }
    if (e.key === 'Escape') {
      closeSidebar();
      closeMobileMenu();
    }
  });
  
  // Handle browser back/forward
  window.addEventListener('popstate', handleRoute);
  
  // Check initial route
  handleRoute();
}

// Handle routing
function handleRoute() {
  const path = window.location.pathname;
  const hash = window.location.hash.slice(1);
  
  if (hash) {
    const topic = topicManifest.topics.find(t => t.id === hash);
    if (topic) {
      loadTopic(hash);
    }
  } else {
    showHome();
  }
}

// Navigate to a route
function navigateTo(topicId) {
  if (topicId) {
    window.location.hash = topicId;
  } else {
    window.location.hash = '';
    showHome();
  }
}

// Show home view
function showHome() {
  document.getElementById('home-view').classList.remove('hidden');
  document.getElementById('topic-view').classList.add('hidden');
  updateNavState('home');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show topics section
function showTopicsSection() {
  showHome();
  document.getElementById('topics-section').scrollIntoView({ behavior: 'smooth' });
}

// Update navigation state
function updateNavState(active) {
  const homeBtn = document.getElementById('nav-home');
  const topicsBtn = document.getElementById('nav-topics');
  
  if (active === 'home') {
    homeBtn.classList.add('text-blue-600', 'bg-blue-50');
    homeBtn.classList.remove('text-gray-600', 'hover:bg-gray-100');
    topicsBtn.classList.remove('text-blue-600', 'bg-blue-50');
    topicsBtn.classList.add('text-gray-600', 'hover:bg-gray-100');
  } else {
    homeBtn.classList.remove('text-blue-600', 'bg-blue-50');
    homeBtn.classList.add('text-gray-600', 'hover:bg-gray-100');
    topicsBtn.classList.add('text-blue-600', 'bg-blue-50');
    topicsBtn.classList.remove('text-gray-600', 'hover:bg-gray-100');
  }
}

// Load and render a topic
async function loadTopic(topicId) {
  const topic = topicManifest.topics.find(t => t.id === topicId);
  if (!topic) return;
  
  currentTopicIndex = topicManifest.topics.findIndex(t => t.id === topicId);
  
  // Show topic view
  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('topic-view').classList.remove('hidden');
  updateNavState('topics');
  
  // Load markdown content
  const contentDiv = document.getElementById('topic-content');
  contentDiv.innerHTML = '<div class="flex items-center justify-center py-12"><div class="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div></div>';
  
  try {
    const topicPath = `./content/${topicId}.md`;
    const loadTopicContent = topicContentModules[topicPath];
    if (!loadTopicContent) throw new Error('Topic content not found');

    let markdown = await loadTopicContent();
    
    // Custom renderer for code blocks
    const renderer = new marked.Renderer();
    
    // Override code block rendering - handle both old and new marked.js signatures
    renderer.code = function(code, language, escaped) {
      // New marked.js passes an object as first parameter
      if (typeof code === 'object' && code !== null) {
        language = code.lang;
        code = code.text;
      }
      const lang = language || 'text';
      const isGo = lang === 'go';
      
      if (isGo) {
        // Highlight Go code with Prism
        const highlighted = Prism.highlight(code, Prism.languages.go, 'go');
        return `
          <div class="code-block-wrapper">
            <div class="code-block-header">
              <div class="code-block-title">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                Go
              </div>
              <button onclick="copyCode(this)" class="copy-button">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                <span>Copy</span>
              </button>
            </div>
            <pre class="language-go"><code class="language-go">${highlighted}</code></pre>
          </div>
        `;
      } else {
        // Output block (no language specified)
        return `
          <div class="output-block-wrapper">
            <div class="output-block-header">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3"/>
              </svg>
              Output
            </div>
            <pre class="output-block">${escapeHtml(code.trim())}</pre>
          </div>
        `;
      }
    };
    
    // Render markdown with custom renderer
    contentDiv.innerHTML = marked.parse(markdown, { renderer });
    
    // Add category badge
    const category = topicManifest.categories[topic.category];
    const badge = document.createElement('div');
    badge.className = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4';
    badge.style.backgroundColor = `${category.color}15`;
    badge.style.color = category.color;
    badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full" style="background-color: ${category.color}"></span>${category.name}`;
    contentDiv.insertBefore(badge, contentDiv.firstChild);

    const isNewlyRead = markTopicRead(topicId);
    if (isNewlyRead) {
      renderHome();
      renderMobileMenu();
      updateStats();
    }
    
  } catch (error) {
    contentDiv.innerHTML = `<div class="text-center py-12 text-gray-500"><p>Failed to load topic content.</p></div>`;
  }
  
  // Update navigation buttons
  updateNavButtons();
  
  // Update sidebar highlight
  renderSidebar();
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Escape HTML for display
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Copy code
function copyCode(button) {
  // Find the code block within the wrapper
  const wrapper = button.closest('.code-block-wrapper');
  const codeBlock = wrapper.querySelector('pre code');
  // Get the raw text content (not the highlighted HTML)
  const code = codeBlock.textContent;
  
  navigator.clipboard.writeText(code).then(() => {
    const original = button.innerHTML;
    button.classList.add('copied');
    button.innerHTML = `
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      <span>Copied!</span>
    `;
    setTimeout(() => {
      button.classList.remove('copied');
      button.innerHTML = original;
    }, 2000);
  });
}

// Update navigation buttons
function updateNavButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  if (currentTopicIndex > 0) {
    prevBtn.disabled = false;
    prevBtn.classList.remove('text-gray-300', 'cursor-not-allowed');
    prevBtn.classList.add('text-gray-700', 'hover:bg-gray-100');
  } else {
    prevBtn.disabled = true;
    prevBtn.classList.add('text-gray-300', 'cursor-not-allowed');
    prevBtn.classList.remove('text-gray-700', 'hover:bg-gray-100');
  }
  
  if (currentTopicIndex < topicManifest.topics.length - 1) {
    nextBtn.disabled = false;
    nextBtn.classList.remove('bg-gray-100', 'text-gray-300', 'cursor-not-allowed');
    nextBtn.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
  } else {
    nextBtn.disabled = true;
    nextBtn.classList.add('bg-gray-100', 'text-gray-300', 'cursor-not-allowed');
    nextBtn.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700');
  }
}

// Show previous topic
function showPrevTopic() {
  if (currentTopicIndex > 0) {
    navigateTo(topicManifest.topics[currentTopicIndex - 1].id);
  }
}

// Show next topic
function showNextTopic() {
  if (currentTopicIndex < topicManifest.topics.length - 1) {
    navigateTo(topicManifest.topics[currentTopicIndex + 1].id);
  }
}

// Render home page categories
function renderHome() {
  const container = document.getElementById('categories-container');
  container.innerHTML = '';
  
  for (const [catId, category] of Object.entries(topicManifest.categories)) {
    const topics = topicManifest.topics.filter(t => t.category === catId);
    
    const section = document.createElement('div');
    section.className = 'mb-16';
    section.innerHTML = `
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background-color: ${category.color}15">
          ${getIcon(category.icon, category.color)}
        </div>
        <div>
          <h2 class="text-2xl font-bold text-gray-900">${category.name}</h2>
          <p class="text-gray-500">${category.description}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${topics.map(t => renderTopicCard(t, category.color)).join('')}
      </div>
    `;
    container.appendChild(section);
  }
}

// Render topic card
function renderTopicCard(topic, color) {
  const readBadge = isTopicRead(topic.id)
    ? '<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 ml-2">Read</span>'
    : '';
  const badge = topic.badge ? `<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700 ml-2">${topic.badge}</span>` : '';
  const cardStateClasses = isTopicRead(topic.id)
    ? 'border-green-200 bg-green-50/30 hover:border-green-300'
    : 'border-gray-100 hover:border-gray-200';
  const trailingIcon = isTopicRead(topic.id)
    ? `<svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`
    : `<svg class="w-5 h-5 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>`;
  return `
    <button onclick="navigateTo('${topic.id}')" class="w-full text-left bg-white rounded-xl p-5 shadow-sm border ${cardStateClasses} hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
      <div class="flex items-start gap-3">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background-color: ${color}15">
          <svg class="w-5 h-5" style="color: ${color}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center">
            <h3 class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">${topic.title}</h3>
            ${badge}
            ${readBadge}
          </div>
          <p class="text-sm text-gray-500 mt-1 line-clamp-2">${topic.description}</p>
        </div>
        ${trailingIcon}
      </div>
    </button>
  `;
}

// Get icon SVG
function getIcon(type, color) {
  const icons = {
    code: `<svg class="w-6 h-6" style="color: ${color}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
    terminal: `<svg class="w-6 h-6" style="color: ${color}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    book: `<svg class="w-6 h-6" style="color: ${color}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`
  };
  return icons[type] || icons.code;
}

// Update stats
function updateStats() {
  const readCount = getReadCount();
  const progress = topicManifest.topics.length > 0
    ? Math.round((readCount / topicManifest.topics.length) * 100)
    : 0;

  document.getElementById('stats-container').innerHTML = `
    <div class="text-center"><div class="text-3xl md:text-4xl font-bold text-gray-900 mb-1">${topicManifest.topics.length}</div><div class="text-gray-500">Topics</div></div>
    <div class="text-center"><div class="text-3xl md:text-4xl font-bold text-green-600 mb-1">${readCount}</div><div class="text-gray-500">Read</div></div>
    <div class="text-center"><div class="text-3xl md:text-4xl font-bold text-gray-900 mb-1">${Object.keys(topicManifest.categories).length}</div><div class="text-gray-500">Categories</div></div>
    <div class="text-center"><div class="text-3xl md:text-4xl font-bold text-gray-900 mb-1">${progress}%</div><div class="text-gray-500">Progress</div></div>
  `;
  document.getElementById('sidebar-topic-count').textContent = `${readCount}/${topicManifest.topics.length} topics read`;
  document.getElementById('sidebar-footer-count').textContent = `${topicManifest.topics.length - readCount} unread`;
}

// Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('topics-sidebar');
  const panel = document.getElementById('sidebar-panel');
  
  if (sidebar.classList.contains('hidden')) {
    sidebar.classList.remove('hidden');
    setTimeout(() => panel.classList.remove('translate-x-full'), 10);
    document.getElementById('sidebar-search').focus();
  } else {
    closeSidebar();
  }
}

function closeSidebar() {
  const sidebar = document.getElementById('topics-sidebar');
  const panel = document.getElementById('sidebar-panel');
  panel.classList.add('translate-x-full');
  setTimeout(() => sidebar.classList.add('hidden'), 300);
}

function renderSidebar(topicsToRender = null) {
  const container = document.getElementById('sidebar-topics');
  const topics = topicsToRender || topicManifest.topics;
  
  let html = '';
  for (const [catId, category] of Object.entries(topicManifest.categories)) {
    const catTopics = topics.filter(t => t.category === catId);
    if (catTopics.length === 0) continue;
    
    const isExpanded = expandedCategories.has(catId);
    const currentId = currentTopicIndex >= 0 ? topicManifest.topics[currentTopicIndex].id : null;
    const categoryTotalTopics = topicManifest.topics.filter(t => t.category === catId).length;
    const categoryReadTopics = getReadCountByCategory(catId);
    
    html += `
      <div class="border border-gray-100 rounded-xl overflow-hidden">
        <button onclick="toggleCategory('${catId}')" class="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background-color: ${category.color}15">
              ${getIcon(category.icon, category.color)}
            </div>
            <div class="text-left">
              <span class="font-semibold text-gray-900">${category.name}</span>
              <span class="text-xs text-gray-500 ml-2">(${categoryReadTopics}/${categoryTotalTopics} read)</span>
            </div>
          </div>
          <svg class="w-5 h-5 text-gray-400 transition-transform duration-200 ${isExpanded ? '' : '-rotate-90'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div class="overflow-hidden transition-all duration-200 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}">
          <div class="p-2 space-y-1">
            ${catTopics.map(t => renderSidebarTopicItem(t, category, currentId)).join('')}
          </div>
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
}

function renderSidebarTopicItem(topic, category, currentId) {
  const topicRead = isTopicRead(topic.id);
  const dotOrCheck = topicRead
    ? '<svg class="w-3.5 h-3.5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
    : `<div class="w-1.5 h-1.5 rounded-full flex-shrink-0" style="background-color: ${category.color}"></div>`;
  const readBadge = topicRead
    ? '<span class="ml-auto text-[11px] font-medium text-green-700 bg-green-100 px-1.5 py-0.5 rounded">Read</span>'
    : '';

  return `
    <button onclick="navigateTo('${topic.id}'); closeSidebar();" 
      class="w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all ${currentId === topic.id ? 'bg-blue-50 text-blue-600 font-medium ring-1 ring-blue-200' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} ${topicRead && currentId !== topic.id ? 'text-green-700' : ''}">
      <div class="flex items-center gap-2">
        ${dotOrCheck}
        <span class="truncate">${topic.title}</span>
        ${readBadge}
      </div>
    </button>
  `;
}

function toggleCategory(catId) {
  if (expandedCategories.has(catId)) {
    expandedCategories.delete(catId);
  } else {
    expandedCategories.add(catId);
  }
  renderSidebar();
}

function expandAll() {
  expandedCategories = new Set(['basics', 'concurrency', 'stdlib']);
  renderSidebar();
}

function collapseAll() {
  expandedCategories = new Set();
  renderSidebar();
}

function handleSidebarSearch(query) {
  if (!query.trim()) {
    renderSidebar();
    return;
  }
  
  const filtered = topicManifest.topics.filter(t => 
    t.title.toLowerCase().includes(query.toLowerCase()) ||
    t.description.toLowerCase().includes(query.toLowerCase())
  );
  
  expandedCategories = new Set(['basics', 'concurrency', 'stdlib']);
  renderSidebar(filtered);
}

// Mobile Menu
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const panel = document.getElementById('mobile-panel');
  
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    setTimeout(() => panel.classList.remove('-translate-x-full'), 10);
  } else {
    closeMobileMenu();
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const panel = document.getElementById('mobile-panel');
  panel.classList.add('-translate-x-full');
  setTimeout(() => menu.classList.add('hidden'), 300);
}

function renderMobileMenu() {
  const container = document.getElementById('mobile-topics');
  
  let html = '';
  for (const [catId, category] of Object.entries(topicManifest.categories)) {
    const topics = topicManifest.topics.filter(t => t.category === catId);
    html += `
      <div class="mb-4">
        <div class="flex items-center gap-2 p-2">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background-color: ${category.color}15">
            ${getIcon(category.icon, category.color)}
          </div>
          <span class="font-semibold text-gray-900">${category.name}</span>
        </div>
        <div class="ml-2 space-y-1">
          ${topics.map(t => `
            <button onclick="navigateTo('${t.id}'); closeMobileMenu();" class="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${isTopicRead(t.id) ? 'text-green-700 bg-green-50/50 hover:bg-green-100/50' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}">
              <span class="flex items-center gap-2">
                ${isTopicRead(t.id)
                  ? '<svg class="w-3.5 h-3.5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
                  : `<span class="w-1.5 h-1.5 rounded-full flex-shrink-0" style="background-color: ${category.color}"></span>`}
                <span>${t.title}</span>
              </span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
}

Object.assign(window, {
  navigateTo,
  showTopicsSection,
  toggleSidebar,
  closeSidebar,
  toggleMobileMenu,
  closeMobileMenu,
  handleSidebarSearch,
  expandAll,
  collapseAll,
  showPrevTopic,
  showNextTopic,
  copyCode,
  toggleCategory
});

// Initialize
document.addEventListener('DOMContentLoaded', init);
