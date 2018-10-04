def find_max_consecutive_ones(nums)
    consec = 0
    max_consec = 0
    for i in 0...nums.size()
        if nums[i] == 1
            consec += 1
        else
            max_consec = consec if consec > max_consec
            consec = 0
        end
    end
    max_consec = consec if consec > max_consec
    return max_consec
end
