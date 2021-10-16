import lodash from 'lodash';
import React, { useEffect, useReducer, useState } from 'react';
import useUpcoming from '../../hooks/useUpcoming';
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

const UpcomingList = ({ infinity = false, pageIndex = 1, loader = 14 }) => {
    const [page, setPage] = useState(pageIndex);
    const { upcoming, loading, error, next } = useUpcoming(page);
    const [data, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({
            type: 'INIT_STATE',
            value: upcoming,
        });
    }, [upcoming]);

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
            name="movie"
        />
    );
};

export default UpcomingList;
