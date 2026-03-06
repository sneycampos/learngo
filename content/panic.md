# Panic

Handling unrecoverable errors.

`panic` stops normal execution and runs deferred functions. Use panic for unrecoverable errors.

## Example Code

```go
package main

func main() {
    panic("a problem")
}
```

## Output

```
panic: a problem
```
