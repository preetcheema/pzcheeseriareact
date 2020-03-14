import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from "./HomePage/HomePage";

const App=function () {
 return ( <div className="container"><HomePage/></div>)
};

ReactDOM.render(<App/>, document.getElementById('root'));