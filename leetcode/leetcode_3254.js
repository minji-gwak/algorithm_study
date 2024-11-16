const resultsArray = (nums, k) => {
    const result = [];

    for (let i = 0; i < nums.length - k + 1; i++) {
        let isTrue = true;
        for (let j = 0; j < k - 1; j++) {
            let curr = nums[i + j];
            let next = nums[i + j + 1];
            if (curr + 1 !== next) {
                isTrue = false;
                break;
            }
        }
        result.push(isTrue ? nums[i + k - 1] : -1);
    }
    return result;
};
