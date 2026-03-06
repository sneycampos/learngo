# Recursion

Functions calling themselves.

Recursion is when a function calls itself. It needs a base case to stop recursion.

## Example Code

```go
package main

import "fmt"

func fact(n int) int {
    if n == 0 {
        return 1
    }
    return n * fact(n-1)
}

func main() {
    fmt.Println(fact(7))
}
```

## Output

```
5040
```
