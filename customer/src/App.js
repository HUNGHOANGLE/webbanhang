import './App.css';
import 'boxicons/css/boxicons.min.css';
import React, {useState, useEffect} from 'react';
import { UserContext } from './UserContext';
import Layout from "./components/layout/Layout";
function App() {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout/>
      </UserContext.Provider>
  );
}

export default App;
