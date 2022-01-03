type Executor<T> = (
    resolve: (value: T) => void,
    reject: (reason?: any) => void
) => void

// 改变 promise 的函数，也暂存起来
// 等解决态了，去把他的状态修改掉
type PromiseResolve = any;
// 扩展之前的暂存队列
type ThenCallbackQueueItem<T, T1Result, T2Result> = [
        OnFulfilled<T, T1Result> | undefined,
        OnRejected<T2Result> | undefined,
    PromiseResolve,
]

type OnFulfilled<T, T1Result> = (value: T | undefined) => T1Result;
type OnRejected<T2Result> = (reason: any) => T2Result

interface PromiseLike<T> {
    then<TResult1, TResult2>(
        onFulfilled?: OnFulfilled<T, TResult1>,
        onRejected?: OnRejected<TResult2>): Promise<TResult1 | TResult2>;
}

export default class MyPromise<T> {
    #status: 'pending' | 'fulfilled' | 'rejected' = 'pending';
    #value: T | undefined = undefined;
    #reason: any = undefined;
    #thenCallbackQueue: ThenCallbackQueueItem<T, any, any>[] = [];

    constructor(executor: Executor<T>) {
        executor(this.#resolveFn.bind(this), this.#rejectFn.bind(this));
    }

    #resolveFn(value: T) {
        this.#status = 'fulfilled';
        this.#value = value;

        // 说明调用 then 的时候 当前 promise 还是 pending 状态
        // 那我们就在解决了之后再释放队列
        if (this.#thenCallbackQueue.length > 0) {
            this.#releaseThenCallbackInOrder();
        }
    }

    #rejectFn(reason: any) {
        this.#status = 'rejected';
        this.#reason = reason;

        if (this.#thenCallbackQueue.length > 0) {
            this.#releaseThenCallbackInOrder();
        }
    }

    #isSettled() {
        return this.#status !== 'pending';
    }


    then<T1Result, T2Result>(onFulfilled?: OnFulfilled<T, T1Result>, onRejected?: OnRejected<T2Result>): MyPromise<T1Result | T2Result> {
        return new MyPromise<T1Result | T2Result>((resolve) => {
            // 增加了第三个参数，会在解决的时候靠它
            // 改变当前返回值 promise 的状态
            this.#thenCallbackQueue.push(
                [onFulfilled, onRejected, resolve]
            );

            if (this.#isSettled()) {
                this.#releaseThenCallbackInOrder();
            }
        });
    }

    #isPromiseLike(obj: unknown): obj is PromiseLike<T> {
        if (obj && typeof obj === 'object' && obj.hasOwnProperty('then')) {
            let o = obj as PromiseLike<any>;

            return o.then && (
                typeof o.then === 'function' || typeof o.then === 'object'
            );
        }
        return false;
    }

    #releaseThenCallbackInOrder() {
        setTimeout(() => {
            this.#thenCallbackQueue.forEach(([onFulfilled, onRejected, promiseResolve]) => {
                if (this.#status === 'fulfilled') {
                    const ret = onFulfilled?.(this.#value);

                    if (ret instanceof MyPromise || this.#isPromiseLike(ret)) {
                        // onFulfilled 或者 onRejected 可能返回任何状态的 promise
                        // then 的结果可能是 fulfilled/rejected 之一
                        // 由于只可能是其中之一，所有只有一个函数走逻辑
                        // 都兼容一下.
                        ret.then((res) => {
                            promiseResolve(res);
                        }, (err) => {
                            promiseResolve(err);
                        });
                    } else {
                        promiseResolve(ret);
                    }

                } else {
                    const ret = onRejected?.(this.#reason);

                    if (ret instanceof MyPromise || this.#isPromiseLike(ret)) {
                        ret.then((res) => {
                            promiseResolve(res);
                        }, (err) => {
                            promiseResolve(err);
                        });
                    } else {
                        promiseResolve(ret);
                    }
                }
            });
            this.#thenCallbackQueue = [];
        });
    }
}

// 下面是测试用例

const EmptyPromise = new MyPromise((resolve) => {
    setTimeout(() => {
        resolve('hi');
    }, 1000);
});

// 0. 不传，返回 undefined
const p0 = EmptyPromise.then(() => {
});
p0.then(res => {
    console.log(res === undefined);
});

// 1. 原始值
const v1 = Math.random();
const p1 = EmptyPromise.then(() => v1);
p1.then(res => {
    console.log(res === v1);
});

// 2. 对象
const v2 = {
    value: Math.random()
};
const p2 = EmptyPromise.then(() => v2);
p2.then(res => {
    console.log(res === v2);
});


// 3. promise 对象
const obj = {
    a: 'hi'
};

const v3 = new MyPromise((resolve) => {
    resolve(obj);
});

const p3 = EmptyPromise.then(() => v3);

p3.then((value) => {
    console.log(value === obj); // true
});


// 4. promiseLike 对象
const wrapperObj = {
    then(resolve: any) {
        resolve(obj);
    }
};

const p4 = EmptyPromise.then(() => {
    return wrapperObj;
});

p4.then(res => {
    console.log(res === obj); // true
});
