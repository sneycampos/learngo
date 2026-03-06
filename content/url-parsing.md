# URL Parsing

Parsing and building URLs.

`net/url` parses URLs into components. Scheme, Host, Path are direct fields.

## Example Code

```go
package main

import (
    "fmt"
    "net/url"
)

func main() {
    s := "https://example.com/path?k=v"
    u, _ := url.Parse(s)
    fmt.Println(u.Scheme)
    fmt.Println(u.Host)
}
```

## Output

```
https
example.com
```
