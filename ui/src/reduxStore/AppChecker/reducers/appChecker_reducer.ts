import { AppStarted_Success, AppStarted_Failed } from "../../constants/constants"

const initialState = {
    status: false,
    error: false
}

const appChecker = (state = initialState, action: any) => {
    switch(action.type) {
        case AppStarted_Success:
            return { status: action.payload.status, error: '' }
        case AppStarted_Failed:
            return { status: false, error: action.error }
        default:
            return state
    }
    
}

export default appChecker