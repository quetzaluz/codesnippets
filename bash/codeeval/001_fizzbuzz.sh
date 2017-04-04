function fb {
    arr=($1)
    F=${arr[0]}
    B=${arr[1]}
    L=${arr[2]}
    i=1
    while  [[ $i -le $L ]]; do
        f=$(($i % $F))
        b=$(($i % $B))
        if [f = 0 -a b = 0]; then
            echo -ne 'FB'
        elif f = 0; then
            echo -ne 'F'
        elif b = 0; then
            echo -ne 'B'
        else
            echo -ne $i
        fi
        echo -ne ' '
        (i++)
    done
    echo -ne '\n'
    echo ''
}

while read line || [[ -n "$line" ]]; do
    fb $line
done < $1