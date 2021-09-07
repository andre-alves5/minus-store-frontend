import React from 'react';
import { Input } from './styles';

export const SearchBar = ({ searchValue, handleChange }) => {
  return (
    <Input
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type your search"
    />
  );
};
