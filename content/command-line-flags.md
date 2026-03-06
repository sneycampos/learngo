# Command-Line Flags

Parsing CLI flags.

`flag` package provides POSIX/GNU-style flag parsing. Call `flag.Parse()` to parse.

## Example Code

```go
package main

import (
    "flag"
    "fmt"
)

func main() {
    wordPtr := flag.String("word", "foo", "a string")
    flag.Parse()
    fmt.Println("word:", *wordPtr)
}
```

## Output

```
word: foo
```
