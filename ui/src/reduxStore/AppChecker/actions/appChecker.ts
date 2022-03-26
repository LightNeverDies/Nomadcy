import { AppStarted_Success, AppStarted_Failed } from "../../constants/constants"

export const appChecker = () => async (dispatch: any) => {
    await fetch('http://localhost:3000/')
    .then((response) => response.json()
    .then((result) => {
        dispatch({
            type: AppStarted_Success,
            payload: {
                status: result.status
            }
        })
    }).catch((error) => {
        dispatch({
            type: AppStarted_Failed,
            error
        })
    })
  )
}