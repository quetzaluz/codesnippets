while read line || [[ -n "$line" ]]; do
    arr=($line)
    F=${arr[0]}
    B=${arr[1]}
    L=${arr[2]}
    i=1
    while  [[ $i -le $L ]]; do
        f=$(($i % $F))
        b=$(($i % $B))
        if [ $f = 0 ]; then
            echo -n 'F'
        fi
        if [ $b = 0 ]; then
            echo -n 'B'
        fi
        if [ $f != 0 ] && [ $b != 0 ]; then
            echo -n "$i"
        fi
        echo -n ' '
        let i=i+1
    done
    echo
done < $1