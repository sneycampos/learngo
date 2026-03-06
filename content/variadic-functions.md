# Variadic Functions

Variable number of arguments.

Variadic functions can be called with any number of trailing arguments.

## Example Code

```go
package main

import "fmt"

func sum(nums ...int) {
    total := 0
    for _, num := range nums {
        total += num
    }
    fmt.Println(total)
}

func main() {
    sum(1, 2)
    sum(1, 2, 3)
}
```

## Output

```
3
6
```
