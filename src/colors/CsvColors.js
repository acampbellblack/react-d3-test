import { useState, useEffect } from 'react';
import { csv } from 'd3';

export const CsvColors = () => {
  const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv';

  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  console.log(data[0]);

  return data.map(d => <div style={{ backgroundColor: d['RGB hex value'], width: '960px', height: '6px' }}></div>);
};