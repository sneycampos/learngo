# Maps (Go 1.23+)

Key-value data structures.

Maps are Go's built-in hash table implementation. They store key-value pairs with O(1) average access time.

## Example Code

```go
package main

import "fmt"

func main() {
    m := make(map[string]int)
    m["k1"] = 7
    m["k2"] = 13
    fmt.Println("map:", m)
    v1 := m["k1"]
    fmt.Println("v1:", v1)
}
```

## Output

```
map: map[k1:7 k2:13]
v1: 7
```

## Iterator Functions (Go 1.23+)

Go 1.23 adds iterator functions to the `maps` package for convenient iteration.

### maps.All() - Key-Value Pairs

```go
package main

import (
    "fmt"
    "maps"
)

func main() {
    m := map[string]int{"a": 1, "b": 2, "c": 3}
    for k, v := range maps.All(m) {
        fmt.Printf("key: %s, value: %d\n", k, v)
    }
}
```

### maps.Keys() - Keys Only

```go
package main

import (
    "fmt"
    "maps"
)

func main() {
    m := map[string]int{"a": 1, "b": 2, "c": 3}
    for k := range maps.Keys(m) {
        fmt.Println(k)
    }
}
```

### maps.Values() - Values Only

```go
package main

import (
    "fmt"
    "maps"
)

func main() {
    m := map[string]int{"a": 1, "b": 2, "c": 3}
    for v := range maps.Values(m) {
        fmt.Println(v)
    }
}
```

### maps.Insert() - Add from Iterator

```go
package main

import (
    "fmt"
    "maps"
)

func main() {
    m := map[string]int{"a": 1}
    
    // Insert from another map
    m2 := map[string]int{"b": 2, "c": 3}
    maps.Insert(m, maps.All(m2))
    
    fmt.Println(m) // map[a:1 b:2 c:3]
}
```
