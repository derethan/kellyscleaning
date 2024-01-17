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
import SiteFooter from './components/SiteFooter';


import { siteLinks } from './Routes';

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Navbar />
    <main>

     <Routes>
      {siteLinks.map((link) => {
			return (
				<Route key={link.ID} path={link.URL} element={link.Component} />
			)
      })}
     </Routes>
   
   </main>

   <SiteFooter />
 </BrowserRouter>
  )
}

export default App
