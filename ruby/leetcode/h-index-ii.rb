# @param {Integer[]} citations
# @return {Integer}
def h_index(citations)
    ans = 0
    citations.reverse!.each_with_index do |c, i|
        if i < c
            ans += 1
        end
    end
    return ans
end
