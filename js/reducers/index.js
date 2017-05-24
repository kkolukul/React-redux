 import {combineReducers} from 'redux';

 import Users from './usersData';
 import userDetails from './userdetails';
 import tweets from './tweetsreducer';

 const allreducers = combineReducers(
   {
     users : Users,
     userDetails : userDetails,
     tweets : tweets
   }
 );

 export default allreducers;
