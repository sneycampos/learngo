# Time

Working with dates and times.

The `time` package provides time functionality. `Now()` returns the current time.

## Example Code

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    now := time.Now()
    fmt.Println(now)
    then := time.Date(2009, 11, 17, 20, 34, 58, 0, time.UTC)
    fmt.Println(then)
}
```

## Output

```
2009-11-17 20:34:58 +0000 UTC
2009-11-17 20:34:58 +0000 UTC
```
