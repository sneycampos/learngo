# Number Parsing

Converting strings to numbers.

`strconv` provides string-to-number conversion. `Atoi` is a convenience for base-10 integers.

## Example Code

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    f, _ := strconv.ParseFloat("1.234", 64)
    fmt.Println(f)
    i, _ := strconv.Atoi("135")
    fmt.Println(i)
}
```

## Output

```
1.234
135
```
