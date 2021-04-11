import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import './global.scss';
import UnderBanner from './components/UnderBanner/UnderBanner';
import City from './components/City/City';
import Stay from './components/Stay/Stay';
import Count from './components/Count/Count';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Comment from './components/Comment/Comment';

import 'antd/dist/antd.css';

function App() {
  return (
    <>
      <Header/>
      <MainContent/>
      <UnderBanner/>
      <City/>
      <Stay/>
      <Count/>
      <Comment/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
