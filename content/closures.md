# Closures

Anonymous functions with captured state.

Closures are anonymous functions that capture variables from their surrounding scope.

## Example Code

```go
package main

import "fmt"

func intSeq() func() int {
    i := 0
    return func() int {
        i++
        return i
    }
}

func main() {
    nextInt := intSeq()
    fmt.Println(nextInt())
    fmt.Println(nextInt())
    fmt.Println(nextInt())
}
```

## Output

```
1
2
3
```
