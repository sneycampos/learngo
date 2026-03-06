# HTTP Client

Making HTTP requests.

`http.Get` makes simple GET requests. The response body must be closed.

## Example Code

```go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    resp, _ := http.Get("https://example.com")
    defer resp.Body.Close()
    fmt.Println("Status:", resp.Status)
}
```

## Output

```
Status: 200 OK
```
