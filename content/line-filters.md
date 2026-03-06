# Line Filters

Processing text line by line.

Line filters read input, process it, and produce output. `bufio.Scanner` reads lines conveniently.

## Example Code

```go
package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    scanner := bufio.NewScanner(os.Stdin)
    for scanner.Scan() {
        fmt.Println(strings.ToUpper(scanner.Text()))
    }
}
```

## Output

```
hello → HELLO
```
