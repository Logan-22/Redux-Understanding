const redux = require('redux');
const BUY_CAKE = 'BUY_CAKE';

//Action Creator - Return Action, which is an Object with 'type' property

const buyCake = (count=1) => {
	return{
		type: BUY_CAKE,
		payload:count
	}
}

// Initial State of the app, when it loads for the first time
//State is represented as Objects

const initialState = {
	numOfCakes: 100
}

// Reducer is just a function , which returns new updated state based on the Action preformed

const reducer = ( state = initialState, action ) => {
	switch(action.type){
		case BUY_CAKE: return {
			...state,
			numOfCakes: state.numOfCakes - action.payload
		}
		default: return state
	}
}

// Redux Store which contains the State

const store = redux.createStore(reducer);

// Subscribe this JS App to Redux Store
// Subscribe method returns a function that could be called to unsubscribe the JS app from the redux store
// Syntax - store.subscribe(listener) where listener is a function that is run every time the state in the redux store updates

const unsubscribe = store.subscribe( () => {console.log(store.getState())} )

// Dispatch Action

console.log('Initial State', store.getState()); //Initial State { numOfCakes: 100 }

store.dispatch( buyCake(10) ) //{ numOfCakes: 90 }
store.dispatch( buyCake() )   //{ numOfCakes: 89 }

unsubscribe();

// State is updated, but would not be reflected in the JS app, since it is unsubscribed from the redux store

store.dispatch( buyCake(10) ) 
console.log(store.getState()); //{ numOfCakes: 79 }