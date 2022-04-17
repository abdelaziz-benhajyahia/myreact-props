import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
      <Profile fullName="Folan Ben Folan" bio="CV" profession="Job">
        <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" alt="pic" />
      </Profile>
    </div>
    
  );
}

export default App;
