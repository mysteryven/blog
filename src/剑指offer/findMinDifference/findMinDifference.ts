function findMinDifference(timePoints: string[]): number {
    const A_DAY_MINUS = 1440;
    let minTime = 1440;
    let maxTime = -1;

    if (timePoints.length > A_DAY_MINUS) {
        return 0;
    }

    const arr = new Array(A_DAY_MINUS).fill(false);

    for (let i = 0; i < timePoints.length; i++) {
        const index = convertToMinus(timePoints[i]);
        minTime = Math.min(index, minTime);
        maxTime = Math.max(index, maxTime);
        if (arr[index]) {
            return 0;
        }

        arr[index] = true;
    }

    let minInterval = 1440;
    let lastTimeFlag = -1;

    for (let i = 0; i < A_DAY_MINUS; i++) {
        if (arr[i]) {
            if (lastTimeFlag !== -1) {
                minInterval = Math.min(minInterval, i - lastTimeFlag);
            }
            lastTimeFlag = i;
        }
    }

    return Math.min(minInterval, minTime + A_DAY_MINUS - maxTime)
};

function convertToMinus(time: string) {
    const arr = time.split(":");
    return parseInt(arr[0]) * 60 + parseInt(arr[1])

}