import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './components/App';
import { STORY_ARCHIVE } from './constants/actionTypes';
import './index.css';

ReactDOM.render(
  <App
    stories = {store.getState().storyState}
    onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })}
  />,
  document.getElementById('root')
);
