import {
    collection,
    addDoc,
    doc,
    deleteDoc,
    Timestamp,
  } from "firebase/firestore";
  import { db } from "./config/firebase";
  
  const getCurrentDateTime = () => {
    const now = new Date();
  
    // Get time components
    const hours = now.getHours();
    const minutes = now.getMinutes();
  
    // Get date components
    const date = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-based, so add 1
    const year = now.getFullYear();
  
    // Format time
    const timeFormat = `${hours}:${minutes}`;
  
    // Format date
    const dateFormat = `${date}-${month}-${year}`;
  
    // Combine time and date
    const dateTimeFormat = `${timeFormat} || ${dateFormat}`;
  
    return dateTimeFormat;
  };
  
  export const addDocWithoutId = async (data) => {
    var myTimestamp = Timestamp.fromDate(new Date());
    await addDoc(collection(db, "contacts"), {
      name: data.name,
      email: data.email,
      message: data.message,
      timeOfCreation: getCurrentDateTime(),
    });
  };
  
  export const deleteDocument = async (collectionName, docId) => {
    try {
      await deleteDoc(doc(db, collectionName, docId));
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Error Deleting Document");
    }
  };