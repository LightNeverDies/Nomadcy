import { FindDomain_Success, FindDomain_Failed } from "../../constants/constants"

const initialState = {
    error: '',
    text: '',
    values: []
}

const findDomain = (state = initialState, action: any) => {
    switch(action.type) {
        case FindDomain_Success:
            return { values: action.payload.values, text: action.payload.text, error: ''}
        case FindDomain_Failed:
            return { values: [], text: '', error: action.error}
        default:
            return state
    }
}

export default findDomain