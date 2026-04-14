import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

const needsRef = collection(db, "needs");

export async function submitNeed(needData) {
  const docRef = await addDoc(needsRef, {
    ...needData,
    status: "open",
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getAllNeeds() {
  const q = query(needsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function updateNeedStatus(needId, status) {
  const needDoc = doc(db, "needs", needId);
  await updateDoc(needDoc, { status });
}

export async function getNeedById(needId) {
  const needDoc = await getDoc(doc(db, "needs", needId));
  if (needDoc.exists()) {
    return { id: needDoc.id, ...needDoc.data() };
  }
  return null;
}
