# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum(candidates, target)
    return [] if target < 0
    return [[]] if target == 0
    result = []
    for i in 0...candidates.size()
        part_sum = combination_sum(candidates[i..-1], target - candidates[i])
        part_sum.each do |s|
            result << s + [candidates[i]]
        end
    end
    return result

end
