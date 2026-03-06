# For Loop (Go 1.22+)

The only looping construct in Go.

Go has only one looping construct: the `for` loop. It can be used like a while loop by omitting the init and post statements.

## Example Code

```go
package main

import "fmt"

func main() {
    i := 1
    for i <= 3 {
        fmt.Println(i)
        i = i + 1
    }
    for j := 7; j <= 9; j++ {
        fmt.Println(j)
    }
}
```

## Output

```
1
2
3
7
8
9
```

## Range Over Integers (Go 1.22+)

Go 1.22 introduced range over integers for cleaner, less error-prone loops:

```go
package main

import "fmt"

func main() {
    for i := range 5 {
        fmt.Println(i)  // Prints 0, 1, 2, 3, 4
    }
}
```

## Output

```
0
1
2
3
4
```

The `range N` syntax is cleaner and eliminates off-by-one errors common in traditional for loops.
