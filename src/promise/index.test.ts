import MyPromise from "promise"

describe('MyPromise', () => {
    afterEach(() => {
        jest.useRealTimers();
    });

    it('处理 undefined 是正常的', () => {
        jest.useFakeTimers();
        const EmptyPromise = new MyPromise((resolve) => {
            resolve('hi');
        });
        jest.runOnlyPendingTimers();

        // 0. 不传，返回 undefined
        const p0 = EmptyPromise.then((res) => {
            // console.log(res);
        });
        jest.runOnlyPendingTimers();
        p0.then(res => {
            expect(res).toBe(undefined)
        });
        jest.runOnlyPendingTimers();
    })
})