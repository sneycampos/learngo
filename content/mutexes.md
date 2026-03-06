# Mutexes

Mutual exclusion for safe access.

Mutexes provide mutual exclusion to protect shared state. `Lock()` acquires the mutex, `Unlock()` releases it.

## Example Code

```go
package main

import (
    "fmt"
    "sync"
)

type Container struct {
    mu       sync.Mutex
    counters map[string]int
}

func (c *Container) inc(name string) {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.counters[name]++
}

func main() {
    c := Container{counters: map[string]int{"a": 0}}
    c.inc("a")
    fmt.Println(c.counters)
}
```

## Output

```
map[a:1]
```
