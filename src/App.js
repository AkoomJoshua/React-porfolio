import logo from './logo.svg';
import './App.scss';
import { Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
        <Route path="/" element={ <layout /> } />   
    </Routes>
  );
}

export default App;
