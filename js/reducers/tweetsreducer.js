export default function (state={tweets:[]},action) {
  switch (action.type){
    case 'FETCHTWEETS_FULLFILLED':{
      return Object.assign({},state,{tweets:action.payload});
    }
  }
  return state;
}
