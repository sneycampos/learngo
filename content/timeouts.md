# Timeouts

Handling timeouts with select.

`time.After` returns a channel that fires after a duration. Use it in select for timeouts.

## Example Code

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    c1 := make(chan string, 1)
    go func() {
        time.Sleep(2 * time.Second)
        c1 <- "result 1"
    }()
    select {
    case res := <-c1:
        fmt.Println(res)
    case <-time.After(1 * time.Second):
        fmt.Println("timeout 1")
    }
}
```

## Output

```
timeout 1
```
