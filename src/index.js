import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Home from './Components/Home';
import './App.js';
import AboutUs from './Components/AboutUs';
import Blog from './Components/Blog';
import StatisticsSection from './Components/StatisticsSection';
import Footer from './Components/Footer';
const el=document.getElementById('root');
const root = ReactDOM.createRoot(el);
const App = () =>{
 return (
    <div>
      <Home />
      <AboutUs />
      <Blog />
      <StatisticsSection />
      <Footer />
       </div>
  );
}
root.render(<App />);