# Iterators

User-defined iteration sequences (Go 1.23+)

Go 1.23 introduced the ability to range over functions. An iterator is a function that takes a `yield` function and calls it for each value in the sequence. The iteration stops when `yield` returns `false`.

## Iterator over a Slice in Reverse

```go
package main

import "fmt"

func ReverseSlice[T any](s []T) func(yield func(T) bool) {
    return func(yield func(T) bool) {
        for i := len(s) - 1; i >= 0; i-- {
            if !yield(s[i]) {
                return
            }
        }
    }
}

func main() {
    numbers := []int{10, 20, 30, 40, 50}
    
    fmt.Println("Reversed:")
    for n := range ReverseSlice(numbers) {
        fmt.Println(n)
    }
}
```

### Output

```
Reversed:
50
40
30
20
10
```

## Fibonacci Iterator

```go
package main

import "fmt"

func Fibonacci(n int) func(yield func(int) bool) {
    return func(yield func(int) bool) {
        a, b := 0, 1
        for i := 0; i < n; i++ {
            if !yield(a) {
                return
            }
            a, b = b, a+b
        }
    }
}

func main() {
    fmt.Println("First 10 Fibonacci numbers:")
    for f := range Fibonacci(10) {
        fmt.Printf("%d ", f)
    }
    fmt.Println()
}
```

### Output

```
First 10 Fibonacci numbers:
0 1 1 2 3 5 8 13 21 34
```

## How It Works

- The iterator function returns a function that takes `yield func(T) bool`
- Inside, you call `yield(value)` for each item in the sequence
- If `yield` returns `false`, the loop was broken (e.g., via `break`)
- Use `range` to iterate: `for v := range MyIterator() { ... }`
