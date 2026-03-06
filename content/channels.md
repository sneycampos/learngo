# Channels

Communication between goroutines.

Channels are typed pipes for goroutine communication. Use `make` to create them. The `<-` operator sends and receives data.

## Example Code

```go
package main

import "fmt"

func main() {
    messages := make(chan string)
    go func() { messages <- "ping" }()
    msg := <-messages
    fmt.Println(msg)
}
```

## Output

```
ping
```
