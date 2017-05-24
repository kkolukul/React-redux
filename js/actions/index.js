export const SelectedUser = (user) => {

  console.log('action is fired by user',user.first);

  return {
    type : 'SELECT_USER',
    payload :user
  }
}
