import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import reducers from "../reducers"

const composedCreateStore = compose(
    applyMiddleware(thunk),
    // window.devToolsExtension ? window.devToolsExtension():undefined
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

function configureStore(initialState = {}) {
	if(process.env.NODE_ENV==="development"){
		console.log("dev mode");
	}else{
		console.log("pro mode");
	}

    return composedCreateStore(reducers, initialState);
}

export default configureStore;