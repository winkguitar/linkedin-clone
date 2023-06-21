import React from 'react';
import './css/App.css';
import Header from './features/header/header.js';
import Sidebar from './features/sidebar/sidebar.js';
import Feed from './features/feed/feed.js'
import Widget from './features/widget/widget';

function App() {
  return (
    <div>
        <Header />
      
      <div className="body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
        

        {/* {Footer} */}
        
    </div>
  );
}

export default App;
