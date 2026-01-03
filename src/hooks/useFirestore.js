import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export function subscribeToHighlights(roomId, callback) {
  const ref = collection(db, "rooms", roomId, "highlights");

  return onSnapshot(ref, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(data);
  });
}
