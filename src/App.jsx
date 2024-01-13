// Desc: Main App Component
// Date: 8/9/2021
// Programmer: Phil Graham

// Import Dependencies
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Import Styles
import './App.css';

// Import Components
import Header from './components/Header';
import Navbar from './components/Navbar';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';

  // Site Link Objects
  export const siteLinks = [
    {ID: 'Home', URL: '/', Name: 'Home'},
    {ID: 'About', URL: '/about', Name: 'About'},
  ];

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Navbar />
    <main>

     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
     </Routes>
   
   </main>
 </BrowserRouter>
  )
}

export default App
