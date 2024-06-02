import ReactDOM from 'react-dom/client';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import App from './App';
import './index.css';
import { StateContextProvider } from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider
    desiredChainId={11155111}
    chainRpc={{
      11155111: 'https://rpc.ankr.com/eth_sepolia',
    }}
    supportedChains={[11155111]}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>,
);
