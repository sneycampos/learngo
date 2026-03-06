# Reading Files

Reading file contents.

`os.ReadFile` reads entire files. `os.Open` returns a file for streaming reads.

## Example Code

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    dat, _ := os.ReadFile("/tmp/dat")
    fmt.Print(string(dat))
}
```

## Output

```
file contents...
```
