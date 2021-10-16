import axios from 'axios';
import { useEffect, useState } from 'react';

const useSimilar = (which = 'movie', id, page = 1) => {
    const [similar, setSimilar] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [next, setNext] = useState(true);

    useEffect(() => {
        const API = import.meta.env.VITE_APP_API;

        const fetchPopularVideos = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/${which}/${id}/similar?api_key=${API}&page=${page}&language=en-US`
                );

                setSimilar(data.results);
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
            setSimilar([]);
            setLoading(true);
            setError(false);
            setNext(true);
        };
    }, [id, page, which]);

    return { similar, loading, error, next };
};

export default useSimilar;
