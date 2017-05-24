import React from 'react';

import {createStore,applyMiddleware} from "redux";
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import allreducers from '../reducers';


const logger = createLogger();
const middleware = applyMiddleware(thunk,logger);
const store = createStore(allreducers,middleware);

export {store}
