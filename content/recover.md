# Recover

Catching panics.

`recover` catches a panic and regains control. It only works in deferred functions.

## Example Code

```go
package main

import "fmt"

func mayPanic() {
    panic("a problem")
}

func main() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered:", r)
        }
    }()
    mayPanic()
}
```

## Output

```
Recovered: a problem
```
