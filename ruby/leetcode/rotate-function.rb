# @param {Integer[]} a
# @return {Integer}
def max_rotate_function(a)
    return 0 if a.size() == 0
    r_sum = 0
    all_sum = 0
    for i in 0...a.size()
        n = a[i]
        r_sum += n * i
        all_sum += n
    end
    result = r_sum
    for i in (a.size() - 1).downto(0)
        r_sum = r_sum + all_sum - a.size() * a[i]
        result = [r_sum, result].max
    end
    return result
end
