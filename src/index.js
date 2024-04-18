// import logger, {appName as name, dummyFunction as dummy} from './tools';
// logger("Welcome to Chapter 10! The application name is \'" + name + "\'. There is a function that returns \'" +
// dummy() + "\'.");

import logger, {appName, dummyFunction} from './tools.js';
logger(`Welcome! The application name is "${appName}". 
There is a function that returns "${dummyFunction()}".`);