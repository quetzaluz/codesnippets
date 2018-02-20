# Read from the file words.txt and output the word frequency list to stdout.
tr '[:upper:]' '[:lower:]' < words.txt |
tr -d '[:punct:]' |
tr -s ' ' '\n' | 
sort |
uniq -c |
sort -r |
sed 's/ *\([0-9]*\) \(.*\)/\2 \1/'