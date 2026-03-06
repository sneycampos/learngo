# If/Else

Conditional branching.

Go's if statements don't need parentheses around conditions but require braces.

## Example Code

```go
package main

import "fmt"

func main() {
    if 7%2 == 0 {
        fmt.Println("7 is even")
    } else {
        fmt.Println("7 is odd")
    }
}
```

## Output

```
7 is odd
```
