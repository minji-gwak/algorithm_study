const checkIfExist = (arr) => {
    const set = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] * 2) || set.has(arr[i] / 2)) {
            return true;
        }
        set.add(arr[i]);
    }
    return false;
};
