import axios from 'axios';
import { useEffect, useState } from 'react';

const usePopular = (which = 'movie', page = 1) => {
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [next, setNext] = useState(true);

    useEffect(() => {
        const API = import.meta.env.VITE_APP_API;

        const fetchPopularVideos = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/${which}/popular?api_key=${API}&page=${page}&language=en-US`
                );

                setPopular(data.results);
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
            setPopular([]);
            setLoading(true);
            setError(false);
            setNext(true);
        };
    }, [page, which]);

    return { popular, loading, error, next };
};

export default usePopular;
