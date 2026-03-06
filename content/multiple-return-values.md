# Multiple Return Values

Functions can return multiple values.

Go functions can return multiple values. This is commonly used for error handling.

## Example Code

```go
package main

import "fmt"

func vals() (int, int) {
    return 3, 7
}

func main() {
    a, b := vals()
    fmt.Println(a)
    fmt.Println(b)
}
```

## Output

```
3
7
```
