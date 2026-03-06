# Errors

Error handling in Go.

Go uses explicit error values instead of exceptions. Functions return errors as the last value.

## Example Code

```go
package main

import (
    "errors"
    "fmt"
)

func f1(arg int) (int, error) {
    if arg == 42 {
        return -1, errors.New("can't work with 42")
    }
    return arg + 3, nil
}

func main() {
    _, e := f1(42)
    if e != nil {
        fmt.Println(e)
    }
}
```

## Output

```
can't work with 42
```
