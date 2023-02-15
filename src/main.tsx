import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> }></Route>
    </Routes>
  );
}

export default Main;
