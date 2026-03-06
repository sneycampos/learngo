# JSON

Encoding and decoding JSON.

`encoding/json` handles JSON encoding/decoding. `Marshal` converts to JSON, `Unmarshal` parses JSON.

## Example Code

```go
package main

import (
    "encoding/json"
    "fmt"
)

func main() {
    bolB, _ := json.Marshal(true)
    fmt.Println(string(bolB))
    byt := []byte(`{"num":6.13}`)
    var dat map[string]interface{}
    json.Unmarshal(byt, &dat)
    fmt.Println(dat)
}
```

## Output

```
true
map[num:6.13]
```
