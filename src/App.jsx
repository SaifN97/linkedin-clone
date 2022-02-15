import React from "react";
import "./App.scss";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* Widget */}
    </div>
  );
}

export default App;
