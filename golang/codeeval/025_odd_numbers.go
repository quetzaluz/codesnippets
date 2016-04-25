package main

import "fmt"
import "math"

func main() {
	for i := 0; i < 100; i++ {
		if math.Mod(float64(i), 2) == 1 {
	 		fmt.Println(i)
		}
	}
}