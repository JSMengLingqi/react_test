import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 使我们的react支持touch相关的事件。
if(React.initializeTouchEvents) {
	React.initializeTouchEvents(true);	
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
