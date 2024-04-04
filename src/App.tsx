import './index.scss'

import {Header} from "@components";
import {Intro} from "@sections";
import Result from './components/sections/result';
import Render from "./components/sections/Render";
import Tengtang from "./components/sections/tengtang";





const App = () => {
  return (
  <>
    <Header/>
    <main>
    <Intro/>
    <Result/>
    <Render/>
    <Tengtang/>
    </main>
    </>
  );
};

export default App;