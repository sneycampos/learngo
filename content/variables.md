# Variables

Declaring and initializing variables.

Variables in Go are explicitly declared using the `var` keyword. Go can infer the type from the initial value. The `:=` syntax is shorthand for declaring and initializing a variable in one line.

## Example Code

```go
package main

import "fmt"

func main() {
    var a = "initial"
    fmt.Println(a)
    var b, c int = 1, 2
    fmt.Println(b, c)
    var d = true
    fmt.Println(d)
    var e int
    fmt.Println(e)
    f := "apple"
    fmt.Println(f)
}
```

## Output

```
initial
1 2
true
0
apple
```
