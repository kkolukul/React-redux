import React from 'react';
import {connect} from 'react-redux';



class ShowTweets extends React.Component {

mytweets(){
  if (this.props.tweets){
  return this.props.tweets.map((tweet) => {
    return (<li className="list-group-item" key={tweet.id}>{tweet.text}</li>);
  });
  }
}
  render(){
    return (
      <ul className="list-group">
        {this.mytweets()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets : state.tweets.tweets
  }
}



export default connect (mapStateToProps)(ShowTweets);
