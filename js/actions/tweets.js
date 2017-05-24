import axios from 'axios';

export function fetchTweets (){
  return function(dispatch) {
    axios.get("http://rest.learncode.academy/api/reacttest/tweets")
    .then((response) =>{
      dispatch({type:"FETCHTWEETS_FULLFILLED",payload:response.data})
    })
    .catch((err) => {
      dispatch({type:"FETCHTWEETS_REJECTED",payload:err})
    })
  }
}
