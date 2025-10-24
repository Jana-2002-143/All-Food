import { useState } from 'react';
import Header from "./components/Header";
import Section from "./components/Section";
import Article from "./components/Article";
import Fooder from "./components/Fooder";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Section />
        <Article />
        <Fooder />
      </div>
    </>
  );
}

export default App;
