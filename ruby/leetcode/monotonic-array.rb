# @param {Integer[]} a
# @return {Boolean}
def is_monotonic(a)
    if a.size() == 1
        return true
    end
    d = 0
    for i in 0...(a.size() - 1)
        if d == 1
            if a[i] > a[i + 1]
                return false
            end
        elsif d == 2
            if a[i] < a[i + 1]
                return false
            end
        else
            if a[i] < a[i + 1]
                d = 1
            elsif a[i] > a[i + 1]
                d = 2
            end
        end
    end
    return true
end
