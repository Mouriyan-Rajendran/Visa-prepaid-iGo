import './App.css';
import HeaderComponent from './components/headerComponent';
import Menu from './components/menu';
import MainPage from './components/mainPage';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <HeaderComponent/>
      </div>
      <div className='row my-2'>
        <div className='col-6'>
          <Menu/>
        </div>
        <div className='col-6'>
          <MainPage/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
