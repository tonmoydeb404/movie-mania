import axios from 'axios';
import { useEffect, useState } from 'react';

const useTopRated = (which = 'movie', page = 1) => {
    const [topRated, setTopRated] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [next, setNext] = useState(true);

    useEffect(() => {
        const API = import.meta.env.VITE_APP_API;

        const fetchPopularVideos = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/${which}/top_rated?api_key=${API}&page=${page}&language=en-US`
                );

                setTopRated(data.results);
                setError(false);
                setLoading(false);

                if (data.total_pages === page) setNext(false);
            } catch (err) {
                console.log(err);

                setLoading(false);
                setError(true);
            }
        };

        fetchPopularVideos();

        // CLEANUP
        return () => {
            setTopRated([]);
            setLoading(true);
            setError(false);
            setNext(true);
        };
    }, [page, which]);

    return { topRated, loading, error, next };
};

export default useTopRated;
