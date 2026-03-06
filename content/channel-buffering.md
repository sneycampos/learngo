# Channel Buffering

Buffered channels for async communication.

Buffered channels have a capacity. Sends block only when buffer is full, receives block when empty.

## Example Code

```go
package main

import "fmt"

func main() {
    messages := make(chan string, 2)
    messages <- "buffered"
    messages <- "channel"
    fmt.Println(<-messages)
    fmt.Println(<-messages)
}
```

## Output

```
buffered
channel
```
