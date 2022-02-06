import largestRectangleArea from "../largestRectangleArea/largestRectangleArea";

function maximalRectangle(matrix: string[]): number {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    let heights = new Array(matrix[0].length).fill(0);
    let maxArea = 0;

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i].split('').map(n => parseInt(n));
        for (let j = 0; j < row.length; j++) {
            if (row[j] === 0) {
                heights[j] = 0
            } else {
                heights[j] = heights[j] + 1;
            }
        }

        maxArea = Math.max(largestRectangleArea(heights), maxArea);
    }

    return maxArea;
};
