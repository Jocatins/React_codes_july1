import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CodeContainer from './components/CodeContainer';
import HooksCodeContainer from './components/HooksCodeContainer';
import TechContainer from './components/TechContainer';
import NewCodeContainer from './components/NewCodeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer code />
        <ItemContainer />
        <HooksCodeContainer />
        <TechContainer />
        <CodeContainer />
        <NewCodeContainer />
      </div>
    </Provider>
  );
}

export default App;
