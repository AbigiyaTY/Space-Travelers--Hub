import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Mission from './Components/Mission/Mission';
import Rockets from './Components/Rockets/Rokets';
import Myprofile from './Components/MyProfile/Myprofile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
