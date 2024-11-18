const decrypt = (code, k) => {
    const decrypted = [];
    const n = code.length;

    for (i = 0; i < n; i++) {
        let sum = 0;
        if (k > 0) {
            for (let j = 1; j <= k; j++) {
                sum += i + j <= n - 1 ? code[i + j] : code[i + j - n];
            }
        } else if (k < 0) {
            for (let j = k; j <= -1; j++) {
                sum += i + j >= 0 ? code[i + j] : code[i + j + n];
            }
        }
        decrypted.push(sum);
    }
    return decrypted;
};
