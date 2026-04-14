import { useState, useEffect, useCallback } from "react";
import { getAllTasks, getTasksByVolunteer } from "../firebase/tasksService";

export function useTasks(volunteerId) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = volunteerId
        ? await getTasksByVolunteer(volunteerId)
        : await getAllTasks();
      setTasks(data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [volunteerId]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return { tasks, loading, error, refetch: fetchTasks };
}
