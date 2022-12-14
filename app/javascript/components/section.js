import { Component } from "react"
import h from "components/htm_create_element"

import { useState } from 'react';

export default function Section() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return h`
    <div>
      <p>You clicked ${count} times</p>
      <button onClick=${() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  `;
}