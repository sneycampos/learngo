# Functions

Defining and calling functions.

Functions are declared with the `func` keyword. Parameters have types after their names.

## Example Code

```go
package main

import "fmt"

func plus(a int, b int) int {
    return a + b
}

func main() {
    res := plus(1, 2)
    fmt.Println("1+2 =", res)
}
```

## Output

```
1+2 = 3
```
