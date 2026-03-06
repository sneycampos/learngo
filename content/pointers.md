# Pointers

Memory addresses and dereferencing.

Pointers hold memory addresses of values. The `&` operator gets the address, `*` dereferences a pointer.

## Example Code

```go
package main

import "fmt"

func zeroptr(iptr *int) {
    *iptr = 0
}

func main() {
    i := 1
    fmt.Println("initial:", i)
    zeroptr(&i)
    fmt.Println("zeroptr:", i)
}
```

## Output

```
initial: 1
zeroptr: 0
```
