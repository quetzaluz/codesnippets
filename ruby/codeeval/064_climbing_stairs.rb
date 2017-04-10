def factorial(integ)
    f = 1; for i in 1..integ; f *= i; end; f
end

def perm(one, two)
    return factorial(one+two)/(factorial(one)*factorial(two))
end

def cs(num)
    np = 0
    one = num
    two = 0
    while one >= 0 do
        np += perm(one, two)
        two += 1
        one = num - (2 * two)
    end
    return np
end
