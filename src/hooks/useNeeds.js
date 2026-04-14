import { useState, useEffect, useCallback } from "react";
import { getAllNeeds } from "../firebase/needsService";

export function useNeeds() {
  const [needs, setNeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNeeds = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllNeeds();
      setNeeds(data);
    } catch (err) {
      console.error("Error fetching needs:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNeeds();
  }, [fetchNeeds]);

  return { needs, loading, error, refetch: fetchNeeds };
}
