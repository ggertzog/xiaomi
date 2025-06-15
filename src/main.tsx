import ReactDOM from 'react-dom/client';

import './styles/index.scss';
import App from './components/app/App';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container!);

root.render(<App />);
