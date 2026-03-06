# Switch

Multi-way conditional statements.

Switch statements provide multi-way branching. Unlike other languages, Go's switch doesn't fall through by default.

## Example Code

```go
package main

import "fmt"

func main() {
    i := 2
    switch i {
    case 1:
        fmt.Println("one")
    case 2:
        fmt.Println("two")
    case 3:
        fmt.Println("three")
    }
}
```

## Output

```
two
```
