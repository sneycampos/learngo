# Sorting

Sorting slices and collections.

The `slices` package provides sorting functions. `Sort()` sorts basic types in ascending order.

## Example Code

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    strs := []string{"c", "a", "b"}
    slices.Sort(strs)
    fmt.Println("Strings:", strs)
    ints := []int{7, 2, 4}
    slices.Sort(ints)
    fmt.Println("Ints:", ints)
}
```

## Output

```
Strings: [a b c]
Ints: [2 4 7]
```
