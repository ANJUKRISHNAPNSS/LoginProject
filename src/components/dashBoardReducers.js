
export function dashboardReducers(state = {
    datas: []
}, action) {
    console.log({ action })
    // console.log('ooooooo', data)
    // console.log(action.data, '[[[[[[[')
    if ('payload' in action) {
        console.log('llll')
        switch (action.type) {
            case 'SET_PROJECT_DATA':
                return {
                    ...state,
                    datas: action.payload
                }
        }
    } else {
        return {
            datas: null
        }
    }
}