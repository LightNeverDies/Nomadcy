import { FindDomain_Success, FindDomain_Failed } from "../../constants/constants"

export const findDomain = (type: string, min: number, max: number) => async (dispatch: any) => {
    await fetch(`http://localhost:3000/domain/?type=${type}&min=${min}&max=${max}`)
    .then((response) => response.json())
    .then((result) => {
        dispatch({
            type: FindDomain_Success,
            payload: {
                text: result.sendInfo.text,
                values: result.sendInfo.values
            }
        })
    }).catch((error) => {
        dispatch({
            type: FindDomain_Failed,
            error
        })
    })
} 