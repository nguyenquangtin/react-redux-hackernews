import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './components/App';
import { getReadableStories } from './selectors/story';
import { STORY_ARCHIVE } from './constants/actionTypes';
import './index.css';

ReactDOM.render(
  <App
    stories = {getReadableStories(store.getState())}
    onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })}
  />,
  document.getElementById('root')
);
