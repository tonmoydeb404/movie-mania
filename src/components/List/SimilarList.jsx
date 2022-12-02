import lodash from 'lodash';
import React, { useEffect, useReducer, useState } from 'react';
import useSimilar from '../../hooks/useSimilar';
import ListItemCard from './ListItemCard';

const initialState = [];

const reducer = (reducerState, action) => {
    switch (action.type) {
        case 'INIT_STATE': {
            const newState = lodash.cloneDeep(action.value);
            const newReducerState = [...newState];
            const updatedState = lodash.uniqBy(newReducerState, 'id');
            return updatedState;
        }

        case 'CLEAR_STATE':
            return [];
        default:
            return reducerState;
    }
};

const SimilarList = ({ infinity = false, pageIndex = 1, name = 'movie', loader = 14, id }) => {
    const [page, setPage] = useState(pageIndex);
    const [listName, setListName] = useState(name);
    const { similar, loading, error, next } = useSimilar(listName, id, page);
    const [data, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({
            type: 'INIT_STATE',
            value: similar,
        });
        
        // cleanup
        return () => {
            dispatch({ type: 'CLEAR_STATE' })
        }
    }, [similar]);

    useEffect(() => {
        setListName(name);
        setPage(1);
        dispatch({ type: 'CLEAR_STATE' });
    }, [name]);

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

export default SimilarList;
