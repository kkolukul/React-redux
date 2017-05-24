export default function (state={user:{first:"",last:"",batch:"",tweets:[]}},action){
  switch(action.type){
    case 'SELECT_USER':{
    return Object.assign({},state,{user:action.payload}) ;

    }
    case 'FETCHTWEETS_FULLFILLED':{
      return Object.assign({},state,{tweets:action.payload}) ;
    }

  }
  return state;
}
