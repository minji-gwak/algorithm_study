const countFairPairs = (nums, lower, upper) => {
    nums.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[i] + nums[mid] >= lower) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        const minIdxJ = left;

        left = i + 1;
        right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[i] + nums[mid] <= upper) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        const maxIdxJ = right;

        count += maxIdxJ - minIdxJ + 1;
    }

    return count;
};
