import React, { useState } from 'react';

const Dropdown = ({ options, onSelect, label }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className='flex items-end my-2 gap-x-12 justify-between '>
            <label className=''>{label}</label>
            <select
                className='border rounded-lg h-10 md:w-72 w-full p-2'
                value={selectedOption}
                onChange={(e) => handleSelect(e.target.value)}
            >
                <option value="" disabled>Select an option</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
