function largestRectangleArea(heights: number[]): number {
    const stack: number[] = [-1];
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (
            stack[stack.length - 1] !== -1 &&
            heights[stack[stack.length - 1]] > heights[i]
        ) {
            const height = heights[stack.pop() as number];
            const width = i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, width * height)
        }

        stack.push(i);
    }

    while (stack[stack.length - 1] !== -1) {
        const height = heights[stack.pop() as number];
        const width = heights.length - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, width * height)
    }

    return maxArea;
};