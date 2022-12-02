import lodash from 'lodash';
import React, { useEffect, useReducer } from 'react';
import useCredits from '../../hooks/useCredits';
import ListItemCard from './ListItemCard';

const initialState = [];

const reducer = (reducerState, action) => {
    switch (action.type) {
        case 'INIT_STATE': {
            const newState = lodash.cloneDeep(action.value);
            return [...newState];
        }

        case 'CLEAR_STATE':
            return [];
        default:
            return reducerState;
    }
};

const CastList = ({ id }) => {
    const { cast, loading, error } = useCredits('movie', id);
    const [data, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({
            type: 'INIT_STATE',
            value: cast,
        });
        
        // cleanup
        return () => {
            dispatch({ type: 'CLEAR_STATE' })
        }
    }, [cast]);

    return (
        <ListItemCard
            data={data}
            loading={loading}
            error={error}
            infinity={false}
            loader={10}
            next={false}
            increasePage={() => {}}
            name="person"
        />
    );
};

export default CastList;
