import React from 'react';
import {connect} from 'react-redux';
import {fetchTweets} from '../actions/tweets';





class DisplayDetails extends React.Component {



  render(){
    const styling = {
      color :'green'
    }
    return (
      <div>
         <h2 style={styling}>User Details</h2>
         <h4>{this.props.user.first}</h4>
         <h4>{this.props.user.last}</h4>
         <h4>{this.props.user.batch}</h4>
         <br></br>
         <button className="btn btn-primary" onClick={() => this.props.fetchTweets()}>Tweets</button>

      </div>
    );
  }

}

function mapStateToProps (state) {

   return {
     user : state.userDetails.user

   };
}

function matchDispatchToProps(dispatch){

  return {
    fetchTweets : () => dispatch(fetchTweets())
  };

}

export default connect(mapStateToProps,matchDispatchToProps)(DisplayDetails);
