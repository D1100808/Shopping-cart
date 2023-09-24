import React from 'react'
import { sizes } from '../data/sizes';

function Sizes({ handleClick }) {
  return (
    <div
      class="btn-toolbar mb-3"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      {sizes.map((size, index) => (
        <div
          class="btn-group"
          role="group"
          aria-label="Basic checkbox toggle button group"
          key={index}
        >
          <input type="checkbox" class="btn-check" id={index} />
          <label
            class="btn btn-outline-secondary"
            htmlFor={index}
            style={{
              padding: 10,
              margin: 5,
              borderRadius: 50,
              fontSize: 12,
            }}
            onClick={handleClick}
          >
            {size}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Sizes;