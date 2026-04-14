import {
  collection,
  setDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

const volunteersRef = collection(db, "volunteers");

export async function registerVolunteer(uid, volunteerData) {
  await setDoc(doc(db, "volunteers", uid), {
    ...volunteerData,
    status: "available",
  });
}

export async function getAllVolunteers() {
  const q = query(volunteersRef, where("status", "==", "available"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getVolunteerById(uid) {
  const volunteerDoc = await getDoc(doc(db, "volunteers", uid));
  if (volunteerDoc.exists()) {
    return { id: volunteerDoc.id, ...volunteerDoc.data() };
  }
  return null;
}

export async function updateVolunteerStatus(uid, status) {
  const volunteerDoc = doc(db, "volunteers", uid);
  await updateDoc(volunteerDoc, { status });
}
