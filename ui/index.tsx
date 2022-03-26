import React from 'react'
import ReactDOM from 'react-dom'
import App from "./src/App"
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import reducers from './src/reduxStore/combineReducer'

const store = createStore(reducers, applyMiddleware(thunk))

const rootElement = document.querySelector("#root")

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
,rootElement)