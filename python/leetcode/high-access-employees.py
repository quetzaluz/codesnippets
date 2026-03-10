from typing import List


class Solution:
    def findHighAccessEmployees(self, access_times: List[List[str]]) -> List[str]:
        # Group all access times by employee
        by_employee = {}
        for employee, access_time in access_times:
            t = self._to_minutes(access_time)
            by_employee.setdefault(employee, []).append(t)

        result = []
        for employee, times in by_employee.items():
            times.sort()
            # Check if any three accesses fall within a window < 60 minutes
            # (exactly 60 minutes does not count per problem)
            if self._has_high_access(times):
                result.append(employee)
        return result

    def _to_minutes(self, access_time: str) -> int:
        hour = int(access_time[:2])
        minute = int(access_time[2:])
        return hour * 60 + minute

    def _has_high_access(self, times: List[int]) -> bool:
        # For sorted times, three in same hour means some window [i, i+2] has span < 60
        for i in range(len(times) - 2):
            if times[i + 2] - times[i] < 60:
                return True
        return False
