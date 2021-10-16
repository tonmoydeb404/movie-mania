import axios from 'axios';
import { useEffect, useState } from 'react';

const useSearch = (which, query, page) => {
    const [search, setSearch] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [next, setNext] = useState(true);

    useEffect(() => {
        const API = import.meta.env.VITE_APP_API;

        const fetchPopularVideos = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/search/${which}?api_key=${API}&query=${query}&page=${page}&language=en-US`
                );

                setSearch(data.results);
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
            setSearch([]);
            setLoading(true);
            setError(false);
            setNext(true);
        };
    }, [page, query, which]);

    return { search, loading, error, next };
};

export default useSearch;
