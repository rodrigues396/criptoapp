import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import './App.css';
import Layout from './components/Layout';


function App() {

  return (
    <BrowserRouter>
      <Layout/>
      <RoutesApp/>
    </BrowserRouter>
  )
}

export default App;
