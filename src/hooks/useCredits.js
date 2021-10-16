import axios from 'axios';
import { useEffect, useState } from 'react';

const useCredits = (which = 'movie', id) => {
    const [credits, setCredits] = useState({ cast: [], crew: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const API = import.meta.env.VITE_APP_API;

        const fetchPopularVideos = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/${which}/${id}/credits?api_key=${API}&language=en-US`
                );

                setCredits(data);
                setError(false);
                setLoading(false);
            } catch (err) {
                console.log(err);

                setLoading(false);
                setError(true);
            }
        };

        fetchPopularVideos();

        // CLEANUP
        return () => {
            setCredits({ cast: [], crew: [] });
            setLoading(true);
            setError(false);
        };
    }, [id, which]);

    return { cast: credits.cast, crew: credits.crew, loading, error };
};

export default useCredits;
