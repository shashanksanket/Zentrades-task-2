import React, { useState } from 'react';

const Checkbox = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
    <div className='flex w-full  justify-between'>
      <label>
          {label}
      </label>
        <input
        className={`${isChecked?'bg-gray':''}`}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
    </div>
  );
};

export default Checkbox;
