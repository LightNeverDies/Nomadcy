import { AppStarted, AppFailed } from "../../constants/constants"

export const appChecker = () => async (dispatch: any) => {
    await fetch('http://localhost:3000/')
    .then((response) => response.json()
    .then((result) => {
        dispatch({
            type: AppStarted,
            payload: {
                status: result.status
            }
        })
    }).catch((error) => {
        dispatch({
            type: AppFailed,
            error
        })
    })
  )
}