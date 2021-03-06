import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './cakeActions';

const HookCakeContainer = () => {

	const numOfCakes = useSelector( (state) => state.numOfCakes );
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Number of Cakes:{numOfCakes} </h1>
			<button onClick={() => {dispatch(buyCake())}}>Buy Cake</button>
		</div>
		);
}

export default HookCakeContainer;