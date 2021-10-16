import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';

const ListFilter = ({ currentFilter, setFilter, filters }) => {
    const handleChange = (_, newValue) => {
        if (newValue !== null) {
            setFilter(newValue);
        }
    };

    return (
        <ToggleButtonGroup
            size="small"
            color="primary"
            value={currentFilter}
            exclusive
            onChange={handleChange}
        >
            {Object.keys(filters).map((key) => (
                <ToggleButton key={key} value={key}>
                    {filters[key]}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

export default ListFilter;
