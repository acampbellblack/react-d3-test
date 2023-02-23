import { useState, useEffect } from 'react';
import { csv } from 'd3';

import { message } from './message';

export const DataLoader = (csvUrl) => {
    const [data, setData] = useState(null);
    useEffect(() => csv(csvUrl).then(setData), [csvUrl]);
    return <pre>{data ? message(data) : 'Loading...'}</pre>
  }