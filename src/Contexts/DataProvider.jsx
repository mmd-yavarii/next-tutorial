import { createContext, useReducer, useEffect } from 'react';

const DataContext = createContext();

const initialState = {
    isLoading: true,
    error: '',
    data: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'SUCCESS':
            return { isLoading: false, error: '', data: action.payload };

        case 'FAILED':
            return { isLoading: false, error: action.payload, data: [] };

        default:
            throw new Error('Action is not defined');
    }
}

function DataProvider({ children }) {
    const [data, dispach] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => dispach({ type: 'SUCCESS', payload: json }))
            .catch((error) =>
                dispach({ type: 'FAILED', payload: error.message }),
            );
    }, []);

    return (
        <DataContext.Provider value={{ data, dispach }}>
            {data.isLoading && <h1>Loading...</h1>}
            {!!data.error.length && <h1>{data.error}</h1>}
            {!data.length && !!data.data.length && children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider as default };
