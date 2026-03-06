# Exit

Terminating with exit codes.

`os.Exit` terminates the program immediately with an exit code. Deferred functions don't run!

## Example Code

```go
package main

import "os"

func main() {
    os.Exit(3)
}
```

## Output

```
exit status 3
```
