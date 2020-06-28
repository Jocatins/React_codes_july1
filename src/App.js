import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CodeContainer from './components/CodeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CodeContainer />
      </div>
    </Provider>
  );
}

export default App;
