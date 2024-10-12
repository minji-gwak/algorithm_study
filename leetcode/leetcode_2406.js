const minGroups = (intervals) => {
    const points = [];
    intervals.forEach(([left, right]) => {
        points.push([left, 1]);
        points.push([right, -1]);
    });

    points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    let currCnt = 0;
    let maxCnt = 0;

    points.forEach(([num, type]) => {
        if (type === 1) {
            currCnt++;
            maxCnt = Math.max(maxCnt, currCnt);
        } else {
            currCnt--;
        }
    });

    return maxCnt;
};
