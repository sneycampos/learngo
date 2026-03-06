# Writing Files

Writing data to files.

`os.WriteFile` writes entire files with permissions. `os.Create` truncates or creates files.

## Example Code

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    d1 := []byte("hello\ngo\n")
    os.WriteFile("/tmp/dat1", d1, 0644)
    fmt.Println("written")
}
```

## Output

```
written
```
