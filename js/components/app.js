import React from 'react';
import UserList from '../container/userlist';
import DisplayDetails from '../container/displayDetails';
import ShowTweets from '../container/showtweets';
import {Link} from 'react-router-dom';
import Display from './display';

export default class App extends React.Component {
  render(){
    return (
      <div>
        <Link to="/notfound" ><h2>welcome to home </h2></Link>
          <UserList />
          <DisplayDetails />
          <ShowTweets />
      </div>
    );
  }
}
