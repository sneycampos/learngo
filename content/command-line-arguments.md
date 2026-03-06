# Command-Line Arguments

Accessing CLI arguments.

`os.Args` provides access to command-line arguments. `os.Args[0]` is the program name.

## Example Code

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    argsWithProg := os.Args
    argsWithoutProg := os.Args[1:]
    fmt.Println(argsWithProg)
    fmt.Println(argsWithoutProg)
}
```

## Output

```
[./main a b]
[a b]
```
