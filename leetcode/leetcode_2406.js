const minGroups = (intervals) => {
    const points = [];
    intervals.forEach(([left, right]) => {
        points.push([left, 'left']);
        points.push([right, 'right']);
    });

    points.sort((a, b) => (a[0] === b[0] ? a[1].localeCompare(b[1]) : a[0] - b[0]));

    let currCnt = 0;
    let maxCnt = 0;

    points.forEach(([num, type]) => {
        if (type === 'left') {
            currCnt++;
            maxCnt = Math.max(maxCnt, currCnt);
        } else {
            currCnt--;
        }
    });

    return maxCnt;
};
