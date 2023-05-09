import React from 'react';

function Filter({ filter, changeFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input value={filter} type="text" required onChange={changeFilter} />
    </div>
  );
}

export default Filter;
