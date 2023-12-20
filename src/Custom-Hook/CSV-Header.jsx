import { useEffect, useState } from 'react';
import { CustomHeaders } from '../Helpers/userHelpers';

const useCsvHeaders = () => {
  const [csvHeaders, setCsvHeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CustomHeaders();
        setCsvHeaders(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only on mount

  return { csvHeaders, loading, error };
};

export default useCsvHeaders;