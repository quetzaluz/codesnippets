/* /open_challenges/20/submit/ */
package main

import "fmt"
import "log"
import "bufio"
import "os"
import "strings"

func main() {
    file, err := os.Open(os.Args[1])
    if err != nil {
        log.Fatal(err)
    }   
    defer file.Close()
    scanner := bufio.NewScanner(file)
    for scanner.Scan() {
        fmt.Println(strings.ToLower(scanner.Text()))
    }   
}