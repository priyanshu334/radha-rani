'use client'
import React, { useState } from 'react';

const options = [
  { value: 'fashion', label: 'Fashion' },
  { value: 'technology', label: 'Technology' },
  { value: 'health', label: 'Health' },
  { value: 'sports', label: 'Sports' },
  { value: 'education', label: 'Education' },
];
const size = [
    { value: 'fashion', label: 'Fashion' },
    { value: 'technology', label: 'Technology' },
    { value: 'health', label: 'Health' },
    { value: 'sports', label: 'Sports' },
    { value: 'education', label: 'Education' },
  ];

export default function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    console.log('Selected:', e.target.value);
  };

  return (
    <div className="bg-[#C8AD84] flex   p-2 w-full max-w-xs mx-auto">
      {/* Label */}
      
      
      {/* Select Dropdown */}
      <div className=''>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChange}
        className="w-full bg-[#C8AD84] p-2   rounded-md shadow-sm  text-black"
      >
        <option value="" disabled>
          Choose a category
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      </div>
      <div>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChange}
        className="w-full bg-[#C8AD84] p-2   rounded-md shadow-sm  text-black"
      >
        <option value="" disabled>
          Choose a category
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      </div>
     
      
    </div>
  );
}
