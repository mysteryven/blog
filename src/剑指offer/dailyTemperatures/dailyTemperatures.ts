function dailyTemperatures(temperatures: number[]): number[] {
    const temperatureStack = [];

   	const ret = new Array(temperatures.length).fill(0);  

    for (let i = 0; i < temperatures.length; i++) {
        if (temperatureStack.length === 0) {
            temperatureStack.push(i);
        } else {
            while(temperatureStack.length !== 0) {
                const peekIndex = temperatureStack[temperatureStack.length - 1];
    
                if (temperatures[i] <= temperatures[peekIndex]) {
                    temperatureStack.push(i);
                    break;
                } else {
                    temperatureStack.pop();
                    ret[peekIndex] = i - peekIndex;
                }
            }
            if (temperatureStack.length === 0) {
                temperatureStack.push(i);
            }
        }
        
    }

    return ret;
};