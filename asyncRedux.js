const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios');

const GET_USER_REQUEST = 'GET_USER_REQUEST';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
const GET_USER_FAILURE = 'GET_USER_FAILURE';

//Action Creator

const getUserRequest = () => {
	return {
		type: GET_USER_REQUEST
	}
}

const getUserSuccess = user => {
	return {
		type:GET_USER_SUCCESS,
		payload: user
	}
}

const getUserFailure = error => {
	return {
		type:GET_USER_FAILURE,
		payload:error
	}
}

// Initial State

const initialState = {
	loading: false,
	user: [],
	error:''
}

// Reducer

const reducer = ( state = initialState, action ) => {
	switch(action.type){
		case GET_USER_REQUEST: return {
			...state,
			loading:true
		}
		case GET_USER_SUCCESS: return {
			loading:false,
			user: action.payload,
			error:''
		}
		case GET_USER_FAILURE: return {
			loading:false,
			user:[],
			error:action.payload
		}
		default : return state
	}
}

// Store and Middleware

const store = redux.createStore( reducer, applyMiddleware(thunkMiddleware) )

// Thunk Middleware allows Action Creator to return a function instead of a Action Object
// The returned function can be used to perform Async Actions/Side Effects 
// And it can also be used to dispatch other actions, since it received 'dispatch' as an argument

const getUsers = () => {
	return function(dispatch){
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then( response => {
			const users = response.data
			dispatch(getUserSuccess(users))
		} )
		.catch( error => {
			const errorMessage = error.message
			dispatch(getUserFailure(errorMessage))
		} )
	}
}

// Subscribe the JS App to the Redux Store

const unsubscribe = store.subscribe( () => {console.log(store.getState())} );

store.dispatch(getUsers())
