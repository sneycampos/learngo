# Unique Values

Value canonicalization and interning (Go 1.23+)

Go 1.23 introduced the `unique` package, which provides efficient value canonicalization (interning) for comparable types. This allows you to deduplicate values and compare them efficiently using handles.

## What is Value Interning?

Value interning stores only one copy of each distinct value. When you intern a value, you get a handle that can be compared in constant time (O(1)) regardless of the underlying value's size.

## Using `unique.Make()`

```go
package main

import (
	"fmt"
	"unique"
)

func main() {
	// Create handles from strings
	h1 := unique.Make("hello world")
	h2 := unique.Make("hello world")
	h3 := unique.Make("different string")

	// Compare handles - O(1) time regardless of string length
	fmt.Println("h1 == h2:", h1 == h2)  // true (same content)
	fmt.Println("h1 == h3:", h1 == h3)  // false

	// Retrieve the original value
	fmt.Println("h1 value:", h1.Value())
}
```

## Output

```
h1 == h2: true
h1 == h3: false
h1 value: hello world
```

## Benefits

- **Memory Efficiency**: Duplicate values are stored only once
- **Fast Comparison**: Handle comparison is O(1), even for large strings
- **Safe for Concurrent Use**: Handles can be shared across goroutines

## Practical Use Case

Perfect for deduplicating large datasets with many repeated values:

```go
package main

import (
	"fmt"
	"unique"
)

func main() {
	// Simulate processing many strings with duplicates
	emails := []string{
		"alice@example.com",
		"bob@example.com", 
		"alice@example.com",  // duplicate
		"charlie@example.com",
		"bob@example.com",    // duplicate
	}

	// Intern all emails
	uniqueEmails := make(map[unique.Handle[string]]struct{})
	for _, email := range emails {
		h := unique.Make(email)
		uniqueEmails[h] = struct{}{}
	}

	fmt.Printf("Total: %d, Unique: %d\n", len(emails), len(uniqueEmails))
	
	// Print unique values
	for h := range uniqueEmails {
		fmt.Println("-", h.Value())
	}
}
```

## Output

```
Total: 5, Unique: 3
- alice@example.com
- bob@example.com
- charlie@example.com
```

## Key Points

- Works with any comparable type
- Handles remain valid for the lifetime of the program
- Interned values are garbage collected when no handles reference them
- Ideal for large-scale deduplication and caching scenarios
