import { useState, useEffect } from 'react';
import { csv, descending } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/acampbellblack/39c0c6a44928fcd3265ce477c4a5ddba/raw/0984033a9ae31362951240ad782ebadb2391a2e1/UN_Population_2022.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl, row => {
      if (row.Year === '2021') { // Only get rows from 2021
        row.Population = +row.Population; // Convert population to Number
        return row;
      }
    }).then(data => {
      setData(data
        .sort((a, b) => descending(a.Population, b.Population)) // Sort by population descending
        .slice(0, 10) // Take top 10 rows
      );
    });
  }, []);

  return data;
};