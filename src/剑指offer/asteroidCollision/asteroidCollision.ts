function asteroidCollision(asteroids: number[]): number[] {
    const stack = [];

    for (let asteroid of asteroids) {
        if (
            asteroid > 0  || 
            stack.length === 0 ||
            stack[stack.length - 1] < 0
        ) {
            stack.push(asteroid);
        } else {
            let bomb = false;

            while(stack.length !== 0) {
                const peekValue = stack[stack.length - 1];
                const absAsteroid = Math.abs(asteroid);
                
                if (peekValue > absAsteroid) {
                    bomb = true;
                    break;
                }  else if (peekValue < 0) {
                    break;
                }else if (peekValue === absAsteroid) {
                    bomb = true;
                    stack.pop();
                    break;
                } else {
                    stack.pop();
                }
            }
            if (!bomb) {
                stack.push(asteroid);
            }
        }
    } 

    return stack;
};
