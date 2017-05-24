import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SelectedUser} from '../actions';



class UserList extends React.Component {
  constructor(){
    super();
  }

  userlist () {
  return this.props.users.map((user) =>{
   return (<li className="list-group-item" key={user.first}><a onClick={() => this.props.selectUser(user)}> {user.first}</a></li>);
  });
}

 render() {
   const styling = {
     color :'red'
   }
   return (
        <div>
        <h3 style={styling}>List of Users</h3>
        <ul className="list-group">{this.userlist()}</ul>
        </div>
   );
 }

}

 function mapStateToProps(state) {

   return {
     users : state.users
   };
 }

 function matchDispatchToProps(dispatch) {

   return {
     selectUser :(user) => dispatch(SelectedUser(user))
   }

  //  return bindActionCreators({selectUser:SelectedUser},dispatch);
 }

 export default connect(mapStateToProps,matchDispatchToProps)(UserList);
