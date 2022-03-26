import { AppStarted, AppFailed } from "../../constants/constants"

const initialState = {
    status: false,
    error: false
}

const appChecker = (state = initialState, action: any) => {
    switch(action.type) {
        case AppStarted:
            return { status: action.payload.status, error: '' }
        case AppFailed:
            return { status: false, error: action.error }
        default:
            return state
    }
    
}

export default appChecker