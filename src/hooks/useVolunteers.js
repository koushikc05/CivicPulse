import { useState, useEffect, useCallback } from "react";
import { getAllVolunteers } from "../firebase/volunteersService";

export function useVolunteers() {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVolunteers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllVolunteers();
      setVolunteers(data);
    } catch (err) {
      console.error("Error fetching volunteers:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVolunteers();
  }, [fetchVolunteers]);

  return { volunteers, loading, error, refetch: fetchVolunteers };
}
