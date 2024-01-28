// import logo from './logo.svg';
// import './App.css';

import MyFooter from "./components/Footer"
import MyHeader from "./components/Header"
import './index.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
function App(){
    return(
        <div>
            <MyHeader />
            <h3>My First Class Of React</h3>
            <MyFooter />

        </div>
    )
}
export default App