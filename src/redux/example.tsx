import React from 'react';
import Provider, {useDispatch, useSelector} from './provider';
import createStore from './createStore';

interface State {
    count: number
}

const store = createStore<State, any>(counter);

function counter(state: any, action: any) {
    if (typeof state === 'undefined') {
        return {
            count: 0
        };
    }

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
}


function A() {
    return (
        <Provider store={store}>
            <B/>
            <C/>
        </Provider>
    );
}

function B() {
    console.log('b');
    const count = useSelector<State, number>((state) => state.count);
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>
                +
            </button>
            <div>{count}</div>
        </>
    );
}

function C() {
    console.log('c');
    return <div>hello world</div>;
}
