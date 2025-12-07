import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {ProductProvider} from "./context";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <ProductProvider>
      <Router basename="/THCquila/">
        <App />
      </Router>
    </ProductProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
