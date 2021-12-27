// provider.tsx
import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import {Action, AnyAction, Dispatch, Store} from './createStore';

interface ReactReduxContextValue<SS = any, A extends Action = AnyAction> {
    store: Store<SS, A>
}

const ReactReduxContext = React.createContext<ReactReduxContextValue>(null as any);

interface ProviderProps {
    store: Store;
    children: React.ReactNode
}

export function useDispatch() {
    const contextValue = useContext(ReactReduxContext);
    return contextValue.store.dispatch;
}

function usePrevious<T>(value: T | undefined): T | undefined {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

export function useSelector<TState, Selected extends unknown>(selector: (state: TState) => Selected): Selected {
    const contextValue = useContext(ReactReduxContext);
    const subscribe = contextValue.store.subscribe;
    const state = contextValue.store.getState();
    const nextSelected = selector(state);
    const [_, setCount] = useState(0);
    const prevSelected = usePrevious(nextSelected);

    useEffect(() => {
        const unsubscribe = subscribe(() => {
            if (prevSelected !== nextSelected) {
                forceUpdate();
            }
        });

        function forceUpdate() {
            setCount((prev) => prev + 1);
        }

        return () => {
            unsubscribe();
        };
    }, [subscribe]);

    return nextSelected;
}

function Provider({store, children}: ProviderProps) {
    const contextValue = useMemo(() => {
        return {
            store
        };
    }, [store]);

    const Context = ReactReduxContext;

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
