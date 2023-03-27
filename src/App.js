import { Provider, useStore } from 'react-redux';
import { BrowserRouter, NavLink, Route, Router } from 'react-router-dom';
import './App.css';
import LoginPage from './components/loginPage';
import { store } from './components/store';

function App() {
  return (
    <div className="App" style={{ alignItems: 'center', marginTop: 250 }}>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </div >
  );
}

export default App;
