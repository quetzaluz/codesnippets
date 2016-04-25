package main

import (
	"fmt"
	"math"
)

func main() {
	var s [25]int
	var j int = 24
	for i := 0; i < 50; i++ {
		if math.Mod(float64(i), 2) == 1 {
			fmt.Println(i)
			s[j] = 100 - i
			j -= 1
		}
	}
	for i := 0; i < 25; i ++ {
		fmt.Println(s[i])
	}
}