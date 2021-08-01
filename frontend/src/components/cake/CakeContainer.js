import React from 'react';
import { connect } from 'react-redux';
import {buyCake} from './cakeActions';

const CakeContainer = (props) => {
	return (
		<div>
			<h1>Number of Cakes:{props.numOfCakes} </h1>
			<button onClick={props.buyCake}><strong>Buy Cake</strong></button>
		</div>
		);
}


// The below is moved to separate file called selectors in large applications
// or useSelector Hooks
const mapStateToProps = state => {
	return {
		numOfCakes: state.numOfCakes
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyCake: () => {dispatch(buyCake())}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);