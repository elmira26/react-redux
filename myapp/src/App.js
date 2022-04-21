import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Profile from './components/profile/Profile';
import DialogsContainer from './components/dialogs/DialogsContainer';
import Music from './components/music/Music';
import UsersContainer from './components/users/UsersContainer';
import News from './components/news/News';
import Settings from './components/settings/Settings';




function App(props) {
 
  return (
    // <pre>{JSON.stringify(props, null, 2)}</pre>
    // console.log(props.state.profile)
    <div className="App wrapper">
      <Header />
      <Nav store={props.store} />
      <div className="wrapper_content">
        <Routes>
          <Route path="/Dialogs" element={<DialogsContainer  />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Music" element={<Music />}></Route>
          <Route path="/Users" element={<UsersContainer />}></Route>
          <Route path="/News" element={<News />}></Route>
          <Route path="/Settings" element={<Settings />}></Route>
        </Routes>
      </div>
    </div>

  );
}


export default App;
