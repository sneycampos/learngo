# Range Over Integers

Clean iteration syntax for N times (Go 1.22+)

Go 1.22 introduced a cleaner way to iterate a specific number of times using the `range` keyword with integers.

## Syntax

Instead of the traditional for loop:

```go
for i := 0; i < 5; i++ {
    // do something 5 times
}
```

You can now write:

```go
for i := range 5 {
    // i goes from 0 to 4
}
```

## Example: Multiplication Table

```go
package main

import "fmt"

func main() {
    fmt.Println("5x5 Multiplication Table:")
    fmt.Println("========================")
    
    for row := range 5 {
        for col := range 5 {
            product := (row + 1) * (col + 1)
            fmt.Printf("%3d", product)
        }
        fmt.Println()
    }
}
```

## Output

```
5x5 Multiplication Table:
========================
  1  2  3  4  5
  2  4  6  8 10
  3  6  9 12 15
  4  8 12 16 20
  5 10 15 20 25
```

## Key Points

- The integer `n` in `range n` represents the number of iterations
- The loop variable ranges from `0` to `n-1`
- Works with any integer type
- Makes code more readable and concise for simple iterations
