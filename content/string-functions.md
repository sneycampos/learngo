# String Functions

Common string operations.

The `strings` package provides common string operations.

## Example Code

```go
package main

import (
    "fmt"
    "strings"
)

func main() {
    fmt.Println("Contains:", strings.Contains("test", "es"))
    fmt.Println("Count:", strings.Count("test", "t"))
    fmt.Println("HasPrefix:", strings.HasPrefix("test", "te"))
}
```

## Output

```
Contains: true
Count: 2
HasPrefix: true
```
