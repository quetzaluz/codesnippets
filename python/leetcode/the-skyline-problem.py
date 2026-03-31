class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        # Collect heights at every point of x where x is the array index
        heights = []

        for building in buildings:
            i = 0
            left = building[0]
            right = building[1]
            height = building[2]
            while i < right:
                # Always init value in heights if not exists
                if i >= len(heights):
                    heights.append(0)
                
                if i >= left and height > heights[i]:
                    heights[i] = height
                i += 1
        
        # Collect coordinate at every height change
        i = 0
        coords = []
        last_height = 0
        while i < len(heights):
            this_height = heights[i]
            if this_height != last_height:
                coords.append([i, this_height])
                last_height = this_height
            i += 1
        coords.append([len(heights),0])
        return coords
