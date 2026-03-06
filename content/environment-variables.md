# Environment Variables

Reading env variables.

`os.Getenv` reads environment variables. `os.Setenv` sets them.

## Example Code

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    os.Setenv("FOO", "1")
    fmt.Println("FOO:", os.Getenv("FOO"))
}
```

## Output

```
FOO: 1
```
