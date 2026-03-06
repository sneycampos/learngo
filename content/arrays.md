# Arrays

Fixed-size sequences.

Arrays in Go have a fixed size that is part of their type. They are value types (copied when passed).

## Example Code

```go
package main

import "fmt"

func main() {
    var a [5]int
    fmt.Println("emp:", a)
    a[4] = 100
    fmt.Println("set:", a)
    fmt.Println("get:", a[4])
}
```

## Output

```
emp: [0 0 0 0 0]
set: [0 0 0 0 100]
get: 100
```
