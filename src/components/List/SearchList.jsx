import lodash from 'lodash';
import React, { useEffect, useReducer, useState } from 'react';
import useSearch from '../../hooks/useSearch';
import ListItemCard from './ListItemCard';

const initialState = [];

const reducer = (reducerState, action) => {
    switch (action.type) {
        case 'INIT_STATE': {
            const newState = lodash.cloneDeep(action.value);
            const newReducerState = [...reducerState, ...newState];
            const updatedState = lodash.uniqBy(newReducerState, 'id');
            return updatedState;
        }

        case 'CLEAR_STATE':
            return [];
        default:
            return reducerState;
    }
};

const SearchList = ({
    infinity = false,
    pageIndex = 1,
    name = 'movie',
    loader = 14,
    query = 'demo',
}) => {
    const [page, setPage] = useState(pageIndex);
    const [listName, setListName] = useState(name);
    const { search, loading, error, next } = useSearch(listName, query, page);
    const [data, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({
            type: 'INIT_STATE',
            value: search,
        });
    }, [search]);

    useEffect(() => {
        setListName(name);
        setPage(1);
        dispatch({ type: 'CLEAR_STATE' });
    }, [name, query]);

    const increasePage = () => {
        if (next) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <ListItemCard
            data={data}
            loading={loading}
            error={error}
            infinity={infinity}
            loader={loader}
            next={next}
            increasePage={increasePage}
            name={name}
        />
    );
};

export default SearchList;
