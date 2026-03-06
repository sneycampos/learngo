# Structs

Composite data types.

Structs are typed collections of fields. They're useful for grouping related data.

## Example Code

```go
package main

import "fmt"

type person struct {
    name string
    age  int
}

func main() {
    fmt.Println(person{"Bob", 20})
    fmt.Println(person{name: "Alice", age: 30})
}
```

## Output

```
{Bob 20}
{Alice 30}
```
