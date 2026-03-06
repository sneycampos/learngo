# Values

Basic value types in Go.

Go has several basic value types. Strings can be concatenated with `+`. Integers and floats support standard arithmetic operations. Booleans use `&&` for AND, `||` for OR, and `!` for NOT.

## Example Code

```go
package main

import "fmt"

func main() {
    fmt.Println("go" + "lang")
    fmt.Println("1+1 =", 1+1)
    fmt.Println("7.0/3.0 =", 7.0/3.0)
    fmt.Println(true && false)
    fmt.Println(true || false)
    fmt.Println(!true)
}
```

## Output

```
golang
1+1 = 2
7.0/3.0 = 2.3333333333333335
false
true
false
```
