# Methods

Functions attached to types.

Methods are functions with a special receiver argument. Value receivers operate on a copy, pointer receivers can modify the original.

## Example Code

```go
package main

import "fmt"

type rect struct {
    width, height int
}

func (r rect) area() int {
    return r.width * r.height
}

func main() {
    r := rect{width: 10, height: 5}
    fmt.Println("area:", r.area())
}
```

## Output

```
area: 50
```
