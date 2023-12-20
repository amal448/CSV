import { useEffect, useState } from 'react';
import { GHLFields } from '../Helpers/userHelpers';

const useGHLFields = () => {
  const [ghlFields, setGHLFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GHLFields();
        setGHLFields(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only on mount

  return { ghlFields, loading, error };
};

export default useGHLFields;
