import { useState, useEffect } from 'react';
import axios from 'axios';

const useCsvHeaders = () => {
  const [csvHeaders, setCsvHeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCsvHeaders = async () => {
      try {
        const response = await axios.get('/api/getCsvHeaders'); // Update the API endpoint
        setCsvHeaders(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCsvHeaders();
  }, []);

  return { csvHeaders, loading, error };
};

export default useCsvHeaders;