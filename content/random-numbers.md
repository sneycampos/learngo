# Random Numbers (Go 1.22+)

Generating random numbers.

`math/rand/v2` provides pseudo-random numbers with a modern API. No seeding required.

## Example Code

```go
package main

import (
    "fmt"
    "math/rand/v2"
    "time"
)

func main() {
    // N(n) returns a random value from 0 to n-1
    fmt.Println(rand.N(100))
    
    // Generic random values
    fmt.Println(rand.N(time.Second * 5))
}
```

## Output

```
42
3h12m45.123456789s
```
