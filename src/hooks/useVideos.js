import axios from 'axios';
import { useEffect, useState } from 'react';

const useVideos = (which = 'movie', id) => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const API = import.meta.env.VITE_APP_API;

        const fetchPopularVideos = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    `
                    https://api.themoviedb.org/3/${which}/${id}/videos?api_key=${API}&language=en-US`
                );

                setVideos(data.results);
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
            setVideos([]);
            setLoading(true);
            setError(false);
        };
    }, [id, which]);

    return { videos, loading, error };
};

export default useVideos;
