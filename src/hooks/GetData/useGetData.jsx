import { useState, useEffect } from 'react';
import { database } from '../../helper/firebase/index';
import { ref, onValue, off } from 'firebase/database';

export const useGetData = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    const booksRef = ref(database, 'books');

    const fetchData = (snapshot) => {
      const data = snapshot.val();
      setBooksData(Object.entries(data));
    };

    onValue(booksRef, fetchData);

    return () => {
      off(booksRef, 'value', fetchData);
    };
  }, []); 

  return booksData;
};
