import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Search = styled('form')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const NavTitle = styled(Link)(() => ({
    color: '#e73232',
    textDecoration: 'none',

    '&:hover': {
        color: '#fff',
    },
}));

export default function NavBar() {
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [error, setError] = useState({ isError: false, message: '' });
    const navBarRef = useRef(null);

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

    useEffect(() => {
        document.body.style.paddingTop = `${navBarRef.current.offsetHeight}px`;

        // CLEANUP
        return () => {
            document.body.style.paddingTop = 0;
        };
    }, [navBarRef]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="primary" ref={navBarRef}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        <NavTitle to="/">Movie Mania</NavTitle>
                    </Typography>
                    <Search onSubmit={handleSubmit}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            error={error.isError}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
