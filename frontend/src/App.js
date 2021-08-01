import './App.css';
import CakeContainer from './components/cake/CakeContainer';
import HookCakeContainer from './components/cake/HookCakeContainer';
import { Provider } from 'react-redux';// Provides the Redux store to Component
import store from './components/store';

function App() {
  return (
    <Provider store={store}>
      <CakeContainer/>
      <HookCakeContainer/>
    </Provider>
  );
}

export default App;
