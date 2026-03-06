# Interfaces

Defining behavior through methods.

Interfaces are collections of method signatures. Types implement interfaces by implementing their methods.

## Example Code

```go
package main

import "fmt"

type geometry interface {
    area() float64
}

type rect struct {
    width, height float64
}

func (r rect) area() float64 {
    return r.width * r.height
}

func measure(g geometry) {
    fmt.Println(g.area())
}

func main() {
    r := rect{width: 3, height: 4}
    measure(r)
}
```

## Output

```
12
```
