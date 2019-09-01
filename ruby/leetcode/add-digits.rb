# @param {Integer} num
# @return {Integer}
def add_digits(num)
    result = num
    sum = num
    while num > 9
        iteration_num = num
        sum = 0
        while iteration_num > 0
            r = iteration_num % 10
            sum += r
            iteration_num = (iteration_num - r) / 10
        end
        num = sum
    end
    return sum
end

