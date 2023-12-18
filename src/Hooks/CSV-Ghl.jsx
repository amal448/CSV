// useGhlFields.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const useGhlFields = () => {
  const [ghlFields, setGhlFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGhlFields = async () => {
      try {
        const response = await axios.get('/api/getGhlFields'); // Update the API endpoint
        setGhlFields(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGhlFields();
  }, []);

  return { ghlFields, loading, error };
};

export default useGhlFields;
