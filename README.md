# React-redux
It is a React Redux project implementing the redux architechture (Store, components, actions, reducers, Provider).
Created a Single Store to store application state and data.
Provider makes the store available to the components.
Smart components receive the state as props and can be used inside the components as required.
actions are fired by the components requesting for state change.
Reducers recieve the actions and accordingly that is changing the state accordingly.


Here I created an application that has userlist displayed at the landing page.
When the user selects any of the person from the list then all his details will be displayed in a seperate component.

Here the user also has an option to fetch some tweets. When he clicks the tweets button the tweets are fetched from an API.

Asynchronous Nature:
Here the asynchronous nature is implemnted using redux-middleware and third party module "Axios".
