# @param {Integer} r
# @param {Integer} c
# @param {Integer} r0
# @param {Integer} c0
# @return {Integer[][]}
def spiral_matrix_iii(r, c, r0, c0)
    rx = r0
    cx = c0
    result = [[rx, cx]]
    visits = 1
    steps = 1
    while visits < (r * c)
        # Go across to the right
        for i in 0...steps do
            cx += 1
            if rx < r && rx >= 0 && cx < c && cx >= 0
                result << [rx, cx]
                visits += 1
            end
        end

        # Go down
        for i in 0...steps do
            rx += 1
            if rx < r && rx >= 0 && cx < c && cx >= 0
                result << [rx, cx]
                visits += 1
            end
        end
        steps += 1

        # Go back to the left
        for i in 0...steps do
            cx -= 1
            if rx < r && rx >= 0 && cx < c && cx >= 0
                result << [rx, cx]
                visits += 1
            end
        end

        # Go up
        for i in 0...steps do
            rx -= 1
            if rx < r && rx >= 0 && cx < c && cx >= 0
                result << [rx, cx]
                visits += 1
            end
        end
        steps += 1
    end
    return result
end
