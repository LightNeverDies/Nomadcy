import { combineReducers } from "redux";
import appChecker from './AppChecker/reducers/appChecker_reducer'
import findDomain from "./findDomain/reducers/findDomain_reducers";

const reducers = combineReducers ({
    appChecker,
    findDomain
})

export default reducers