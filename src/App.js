import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { HeaderComponents } from './components/headercomponent/HeaderComponents';
import { AboutUs } from './components/bodycomponent/AboutUs';


function App() {
  return (
    <>
    <HeaderComponents/>
    <AboutUs/>
    </>
  );
}

export default App;
