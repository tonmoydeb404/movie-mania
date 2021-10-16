import lodash from 'lodash';
import React, { useEffect, useReducer, useState } from 'react';
import useVideos from '../../hooks/useVideos';
import ListItemVideo from './ListItemVideo';

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

const VideosList = ({ id, name = 'movie' }) => {
    const [listName, setListName] = useState(name);
    const { videos, loading, error } = useVideos(listName, id);
    const [data, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({
            type: 'INIT_STATE',
            value: videos,
        });
    }, [videos]);

    useEffect(() => {
        setListName(name);

        dispatch({ type: 'CLEAR_STATE' });
    }, [name]);

    return <ListItemVideo data={data} loading={loading} error={error} />;
};

export default VideosList;
