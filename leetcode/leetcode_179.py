from functools import cmp_to_key

class Solution:

    def compare(self, a, b):
        return -1 if a + b > b + a else 1

    def largestNumber(self, nums: List[int]) -> str:
        nums = sorted(list(map(str, nums)), key = cmp_to_key(self.compare))
        return str(int("".join(nums)))