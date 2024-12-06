const maxCount = (banned, n, maxSum) => {
    const bannedSet = new Set(banned);
    let sum = 0;
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (!bannedSet.has(i) && sum + i <= maxSum) {
            sum += i;
            count++;
        }

        if (sum > maxSum) {
            break;
        }
    }

    return count;
};
