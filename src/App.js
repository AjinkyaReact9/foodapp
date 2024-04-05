// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import Body from './components/Body';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import { ThemeProvider } from './utils.js/themeContext';
import userContext from './utils.js/UserContext';



function App() {
  const [loggedIn, setLoggedIn] = useState({})

  useEffect(()=>{
    const data = "Nashte"
    setLoggedIn({
      userName : data
    })
  }, [])
  // const [{ theme, dark},toggle] = React.useContext(ThemeContext);
  //   console.log("theme", { theme, dark},toggle);
  return (
    <userContext.Provider value={loggedIn}>
      <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Form /> */}
      <ThemeProvider>
      <Header />
      </ThemeProvider>
      <Outlet/>
      <Footer />
      
    </div>
    </userContext.Provider>
    
      
    
      
  )
}

export default App;


