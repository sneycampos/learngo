# Signals

Handling OS signals.

`signal.Notify` registers a channel to receive signals. Handle signals for graceful shutdown.

## Example Code

```go
package main

import (
    "fmt"
    "os"
    "os/signal"
    "syscall"
)

func main() {
    sigs := make(chan os.Signal, 1)
    signal.Notify(sigs, syscall.SIGINT)
    fmt.Println("awaiting signal")
    <-sigs
    fmt.Println("exiting")
}
```

## Output

```
awaiting signal
^C
exiting
```
