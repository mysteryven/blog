function evalRPN(tokens: string[]): number {
    const stack: string[] = [];

    for (let token of tokens) {
        switch (token) {
            case '+': {
                const rightVal = parseInt(stack.pop()!); 
                const leftVal = parseInt(stack.pop()!);
                stack.push(String(leftVal + rightVal))
                break;
            }
            case '-': {
                const rightVal = parseInt(stack.pop()!); 
                const leftVal = parseInt(stack.pop()!);
                stack.push(String(leftVal - rightVal))
                break;
            }

            case '*': {
                const rightVal = parseInt(stack.pop()!); 
                const leftVal = parseInt(stack.pop()!);
                stack.push(String(leftVal * rightVal))
                break;
            }
            case '/': 
                const rightVal = parseInt(stack.pop()!); 
                const leftVal = parseInt(stack.pop()!);
                stack.push(String(leftVal / rightVal))
        
                break;
            default: {
                stack.push(token);
            }
        }
    }

    return parseInt(stack[0]);
};
