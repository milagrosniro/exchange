
import './app.scss';

import Body from './components/Body Section/Body';
import { BrowserRouter } from 'react-router-dom';
import TopSection from './components/Body Section/TopSection/TopSection';
import Footer from './components/Footer/Footer';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';


function App() {
  const {theme} = useContext(ThemeContext)
  return (
       <BrowserRouter>
    <div className={`container-${theme}`}>
    <TopSection/>
      <Body/>
      <Footer/>
    </div>
       </BrowserRouter>

  );
}

export default App;
