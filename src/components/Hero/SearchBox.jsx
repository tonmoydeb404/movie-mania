import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBox = ({ className }) => {
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [error, setError] = useState({ isError: false, message: '' });

    const handleSubmit = (e) => {
        // REMOVE FORM DEFAULT BEHAVIOR
        e.preventDefault();

        // VALIDATE SEARCH
        if (search.length) {
            history.push({
                pathname: `/search/${search}`,
            });
        } else {
            setError({
                isError: true,
                message: 'search value cannot empty',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className={className}>
            <TextField
                name="search"
                size="small"
                color="secondary"
                value={search}
                placeholder="search here..."
                onChange={(e) => setSearch(e.target.value)}
                error={error.isError}
                helperText={error.isError && error.message}
            />
            <Button type="submit" variant="contained" color="primary">
                Search
            </Button>
        </form>
    );
};

export default SearchBox;
