package main

import "fmt"
import "log"
import "bufio"
import "os"
import "strings"

var ConvertCase = func(a string) string {
	var s = ""
	for i := 0; i < len(a); i++ {
		var lower = strings.ToLower(a[i:i+1])
		if lower == a[i:i+1] {
			s += strings.ToUpper(a[i:i+1])
		} else {
			s += lower
		}
	}
    return s
}

func main() {
    file, err := os.Open(os.Args[1])
    if err != nil {
        log.Fatal(err)
    }   
    defer file.Close()
    scanner := bufio.NewScanner(file)
    for scanner.Scan() {
        //'scanner.Text()' represents the test case, do something with it
         var res = ConvertCase(scanner.Text())
         fmt.Println(res)
    }   
}