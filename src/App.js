import React, { Component } from 'react';
import './App.css';
import { Films } from './films';

//Class based component
class App extends Component {
  render() {
    return (
      <div className="App">
        <Films />
      </div>
    )
  }
}

//functional component
// function App() {
//   return (
//     <div className="App">
//       <Films />
//     </div>
//   );
// }



export default App;
