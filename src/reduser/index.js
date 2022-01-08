import { combineReducers } from 'redux';

import feedback from './feedback';
import characters from './characters';

export default combineReducers({
  feedback,
  characters,
});
