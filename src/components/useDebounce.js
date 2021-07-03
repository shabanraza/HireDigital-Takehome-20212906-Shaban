

import React, { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(()=>{
    const handler = setTimeout(()=>{
      setDebouncedValue(value)
    },delay)

  return ()=>{
    clearTimeout(handler);
  }

  },[value,delay])

}
export default useDebounce;