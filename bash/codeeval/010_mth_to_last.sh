while read line || [[ -n "$line" ]]; do
    arr=($line)
    i=${arr[-1]}
    l=$((${#arr[@]} - 1))
    idx=$((l - i))
    if [ $idx -ge 0 ] && [ $idx -lt $l ]; then
        echo ${arr[$idx]}
    fi
done < $1