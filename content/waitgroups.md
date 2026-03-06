# WaitGroups

Waiting for goroutines to complete.

WaitGroup waits for a collection of goroutines to finish. `Add()` increments the counter, `Done()` decrements it, `Wait()` blocks until zero.

## Example Code

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int) {
    fmt.Printf("Worker %d starting\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Worker %d done\n", id)
}

func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            worker(i)
        }()
    }
    wg.Wait()
}
```

## Output

```
Worker 1 starting
Worker 2 starting
Worker 3 starting
Worker 1 done
Worker 2 done
Worker 3 done
```

## Go 1.22+ Note

In Go 1.22 and later, loop variables have **per-iteration scope**. This means each goroutine in the example above captures its own copy of `i`.

In older Go versions (pre-1.22), loop variables were reused across iterations. The same code would have printed:

```
Worker 4 starting
Worker 4 starting
Worker 4 starting
Worker 4 done
Worker 4 done
Worker 4 done
```

This happened because all goroutines captured the same variable `i`, which had the final value (4) by the time they executed.

To fix this in older Go versions, you had to pass `i` as an argument to the goroutine:

```go
for i := 1; i <= 3; i++ {
    wg.Add(1)
    go func(id int) {
        defer wg.Done()
        worker(id)
    }(i)  // Pass i as argument
}
```

In Go 1.22+, this workaround is no longer necessary—each iteration gets its own variable.
