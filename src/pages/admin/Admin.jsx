import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

// DB Helpers
import { deleteDocument } from "../../helpers";

// Export data
import * as XLSX from "xlsx";
import { CSVLink } from "react-csv";

const Admin = () => {
  const [messageList, setMessageList] = useState([]);
  const [userAuthStatus, setUserAuthStatus] = useState(false);

  // Form States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Using environment variables for login credentials
  const ROOT_USER = process.env.REACT_APP_ADMIN_USERNAME;
  const ROOT_USER_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;

  const handleAdminLogin = () => {
    if (username === ROOT_USER && password === ROOT_USER_PASSWORD) {
      alert("Logged in");
      setUserAuthStatus(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "contacts"));
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setMessageList(newData);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDocument("contacts", id);
      fetchData();
    } catch (err) {
      console.error("Error deleting document: ", err);
    }
  };

  const exportToXLSX = () => {
    if (messageList.length === 0) {
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(messageList);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Messages");
    XLSX.writeFile(workbook, "messages.xlsx");
  };

  const exportToCSV = () => {
    if (messageList.length === 0) {
      return [];
    }
    return messageList.map(({ id, ...rest }) => rest);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="adminContent p-4">
      {userAuthStatus ? (
        <div className="adminButtonsRow flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
            {/* Refresh Button */}
            <button
              className="adminRefreshBtn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={fetchData}
            >
              Refresh
            </button>

            {/* Export to XLSX */}
            <button
              className="admin-export-btn bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={exportToXLSX}
            >
              Export to XLSX
            </button>

            {/* Export to CSV */}
            <CSVLink
              data={exportToCSV()}
              filename={"messages.csv"}
              className="admin-export-csv-btn bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 text-center"
            >
              Export to CSV
            </CSVLink>
          </div>

          {/* Messages Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {messageList.map((msg) => (
              <div
                key={msg.id}
                className="adminMessage bg-gray-100 p-4 rounded shadow"
              >
                <h3 className="font-bold text-lg">
                  Sender's Name: <span className="font-medium">{msg.name}</span>
                </h3>
                <p className="text-gray-600">Email: {msg.email}</p>
                <p className="text-gray-600">Message: {msg.message}</p>
                <p className="text-gray-600">TimeStamp: {msg.timeOfCreation}</p>
                <button
                  className="adminDeleteBtn bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  onClick={() => handleDelete(msg.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="adminLoginForm max-w-md mx-auto p-6 bg-white rounded shadow">
          <h1 className="adminLoginFormHeading text-xl font-bold mb-4">
            Admin Login
          </h1>

          {/* Username Input */}
          <div className="mb-4">
            <label className="adminLoginFormLabel block text-gray-700 mb-2">
              Username:
            </label>
            <input
              type="text"
              className="adminLoginFormInput border border-gray-300 p-2 w-full rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="adminLoginFormLabel block text-gray-700 mb-2">
              Password:
            </label>
            <input
              type="password"
              className="adminLoginFormInput border border-gray-300 p-2 w-full rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            className="adminFormLoginBtn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            onClick={handleAdminLogin}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin;
