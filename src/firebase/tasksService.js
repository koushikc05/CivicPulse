import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

const tasksRef = collection(db, "tasks");

export async function createTask(needId, volunteerId, adminId) {
  const docRef = await addDoc(tasksRef, {
    needId,
    volunteerId,
    assignedBy: adminId,
    status: "pending",
    assignedAt: serverTimestamp(),
    completedAt: null,
  });
  return docRef.id;
}

export async function getTasksByVolunteer(volunteerId) {
  const q = query(
    tasksRef,
    where("volunteerId", "==", volunteerId),
    orderBy("assignedAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getAllTasks() {
  const q = query(tasksRef, orderBy("assignedAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function updateTaskStatus(taskId, status) {
  const taskDoc = doc(db, "tasks", taskId);
  const updateData = { status };
  if (status === "completed") {
    updateData.completedAt = serverTimestamp();
  }
  await updateDoc(taskDoc, updateData);
}
