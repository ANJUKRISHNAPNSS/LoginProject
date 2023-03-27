export const getCountryList = () => {
    return (dispatch) => {
        fetch(" https://restcountries.com/v2/all?fields=name,region,flag")
            .then(response => response.json())
            .then(data => {
                console.log({ data })
                dispatch({
                    type: 'SET_PROJECT_DATA',
                    payload: data
                })
            })
    }
}