export interface Action<T = any> {
    type: T
}

export interface AnyAction extends Action {
    [extraProps: string]: any
}

export type Reducer<S = any, A extends Action = AnyAction> = (
    state: S | undefined,
    action: A
) => S

export interface Dispatch<A extends Action = AnyAction> {
    <T extends A>(action: T): T
}

export interface Store<S = any, A extends Action = AnyAction> {
    dispatch: Dispatch<A>;
    getState: () => S;
    subscribe(listener: () => void): Unsubscribe
}

export interface Unsubscribe {
    (): void
}

const randomString = () =>
    Math.random().toString(36).substring(7).split('').join('.')

const ActionTypes = {
    INIT: `@@redux/INIT${/* #__PURE__ */ randomString()}`,
}

export default function createStore<S, A extends Action>(reducer: Reducer<S, A>) {
    let state: S;
    let listeners: (() => void)[] = []

    // 初始化派发一下不存在的 action，作用是为了让 state 不为空
    // 这也就是我们必须要在 reducer 写 default 分支的原因。
    dispatch({ type: ActionTypes.INIT } as A)

    function dispatch(action: A) {
        state = reducer(state, action);

        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i]
            listener()
        }

        return action;
    }

    function subscribe(listener: () => void): Unsubscribe {
        listeners.push(listener);

        return () => {
            const index = listeners.indexOf(listener)
            listeners.splice(index, 1)
        }
    }

    return {
        getState() { return state; },
        dispatch,
        subscribe
    }
}
