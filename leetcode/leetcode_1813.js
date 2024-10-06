const areSentencesSimilar = (sentence1, sentence2) => {
    const words1 = sentence1.split(' ');
    const words2 = sentence2.split(' ');
    const minLen = Math.min(words1.length, words2.length);
    let leftCnt = 0,
        rightCnt = 0;

    while (leftCnt < minLen && words1[leftCnt] === words2[leftCnt]) {
        leftCnt++;
    }

    while (
        rightCnt < minLen - leftCnt &&
        words1[words1.length - 1 - rightCnt] === words2[words2.length - 1 - rightCnt]
    ) {
        rightCnt++;
    }

    return leftCnt + rightCnt === minLen;
};
