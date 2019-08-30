import React from 'react';
import Home from './layout';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
    );
}
/*class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
    );
  }
}*/

export default App;
