import { useState, useEffect, useRef } from "react";

import { db } from "../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (col, _q) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const q = useRef(_q).current;
  useEffect(() => {
    setLoading(true);
    let ref = collection(db, col);

    if (ref.empty) {
      setError("Db connection fail!");
      setLoading(false);
    } else {
      if (q) {
        ref = query(ref, where(...q));
        console.log(ref)
      }
      const unsub = onSnapshot(ref,(snapshot) => {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setDocuments(results);
          setLoading(false);
        },
        (err) => {
          console.log(err.message);
          setError(err.message);
          setLoading(false);
        }
      );

      return () => unsub();
    }
  }, [col, q]);
  return { documents, error, loading };
};
