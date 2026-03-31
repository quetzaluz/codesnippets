from collections import defaultdict
from heapq import heappop, heappush
from typing import List


class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        # Critical points only change at building edges; (L,-H) before (R,H) at same x
        # because starts sort before ends, taller starts before shorter ones, shorter ends before taller.
        events = []
        for left, right, height in buildings:
            events.append((left, -height))
            events.append((right, height))
        events.sort()

        # Max-heap via negative heights; lazy-remove counts for ended buildings.
        heap = [0]
        removed = defaultdict(int)
        result: List[List[int]] = []

        def prune() -> None:
            while heap and removed[-heap[0]] > 0:
                removed[-heap[0]] -= 1
                heappop(heap)

        i = 0
        n = len(events)
        while i < n:
            x = events[i][0]
            while i < n and events[i][0] == x:
                _, h = events[i]
                if h < 0:
                    heappush(heap, h)
                else:
                    removed[h] += 1
                i += 1
            prune()
            curr = -heap[0]
            if not result or result[-1][1] != curr:
                result.append([x, curr])

        return result
