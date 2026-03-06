# String Formatting

Formatting with fmt.

`fmt.Printf` formats according to a format string. `%v` is default format, `%d` for integers, `%s` for strings.

## Example Code

```go
package main

import "fmt"

func main() {
    fmt.Printf("%v\n", struct{ x, y int }{1, 2})
    fmt.Printf("%d\n", 123)
    fmt.Printf("%s\n", "string")
}
```

## Output

```
{1 2}
123
string
```
