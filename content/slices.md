# Slices (Go 1.23+)

Dynamic views into arrays.

Slices are dynamically-sized, flexible views into arrays. Unlike arrays, slices are reference types.

## Example Code

```go
package main

import "fmt"

func main() {
    s := make([]string, 3)
    s[0] = "a"
    s[1] = "b"
    s[2] = "c"
    fmt.Println("set:", s)
    s = append(s, "d")
    fmt.Println("apd:", s)
}
```

## Output

```
set: [a b c]
apd: [a b c d]
```

## Iterator Functions (Go 1.23+)

Go 1.23 adds iterator functions to the `slices` package for convenient iteration.

### slices.All() - Index-Value Pairs

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    s := []string{"a", "b", "c"}
    for i, v := range slices.All(s) {
        fmt.Printf("index: %d, value: %s\n", i, v)
    }
}
```

### slices.Backward() - Reverse Iteration

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    s := []string{"a", "b", "c"}
    for i, v := range slices.Backward(s) {
        fmt.Printf("index: %d, value: %s\n", i, v)
    }
}
```

### slices.Values() - Values Only

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    s := []string{"a", "b", "c"}
    for v := range slices.Values(s) {
        fmt.Println(v)
    }
}
```

### slices.Repeat() - Repeat Elements

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    s := []int{1, 2}
    repeated := slices.Repeat(s, 3)
    fmt.Println(repeated) // [1 2 1 2 1 2]
}
```
