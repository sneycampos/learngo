# Defer

Delaying function execution.

`defer` schedules a function call to run after the surrounding function returns. Defers execute in LIFO order.

## Example Code

```go
package main

import "fmt"

func main() {
    defer fmt.Println("world")
    fmt.Println("hello")
}
```

## Output

```
hello
world
```
