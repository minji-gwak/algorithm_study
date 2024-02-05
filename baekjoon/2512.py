n, budgets, limit = int(input()), list(map(int, input().split())), int(input())
low, high = min(budgets), max(budgets)
maxBudget = 0

if limit <= low * n:
    maxBudget = limit // n
else:
    while low <= high:
        mid = (low + high) // 2
        
        budSum = 0
        for bud in budgets:
            budSum += mid if mid < bud else bud
        
        if budSum <= limit:
            maxBudget = max(maxBudget, mid)
            low = mid + 1
        else:
            high = mid - 1

print(maxBudget)
        