# Goroutines

Lightweight concurrent execution.

Goroutines are lightweight threads managed by the Go runtime. Use the `go` keyword to start a goroutine.

## Example Code

```go
package main

import (
    "fmt"
    "time"
)

func f(from string) {
    for i := 0; i < 3; i++ {
        fmt.Println(from, ":", i)
    }
}

func main() {
    f("direct")
    go f("goroutine")
    time.Sleep(time.Second)
    fmt.Println("done")
}
```

## Output

```
direct : 0
direct : 1
direct : 2
goroutine : 0
goroutine : 1
goroutine : 2
done
```
