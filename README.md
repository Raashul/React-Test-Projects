# React-Test-Projects
Practice projects for Reactjs




Redux - A JavaScript library which allows React applications to extract their data into one giant store.

Three Steps to Adding Redux -  1) Define a redux constant. 2) Add an Action Creator. 3) Amend or Add a Reducer

Redux Constants - Constants that allow actions and reducers in redux to listen to the same type to ensure that it recognizes true data.

Action Creators - methods that create and return actions for reducers to manipulate the redux store.

Actions - the plain JavaScript object that Action Creators return. Must include a type parameter with a Redux constant and a certain data payload.

Reducers - extract the Redux logic for the store into functions that handle actions and return pieces of the state.

Provider - a component at the root of your redux application that provides the redux store globally.

mapDispatchToProps - allows action creators to become accessible within React Components through this.props.

mapStateToProps - allows reducers in the redux store to become accessible within React Components through this.props.

bindActionCreators - a redux method that allows action creators to store within this.props in React Components.

Cookies - string names that map string values stored on the browser. Allows applications to keep a local history of data on a browser
