# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    max = 0
    min = nil
    biggest = 0
    prices.each do |p|
        if min == nil || min > p
            min = p
        end
        if (p - min) > biggest
            biggest = p - min
        end
    end
    return biggest
end
