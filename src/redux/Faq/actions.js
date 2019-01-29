import axios from 'axios';

export const getPeopleData = () => {
    return (dispatch) => {
        dispatch(getPeopleDataRequest())
        // axios
        //   .get("https://jsonplaceholder.typicode.com/users")
        //   .then((respon) => {
        //     dispatch(getPeopleDataSuccess(respon.data))
        //   })
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/todos')
          ])
          .then(axios.spread((useres,todosres) => {
                dispatch(getPeopleDataSuccess(useres.data,todosres))
                console.log(todosres)
              }))


          .catch(()=> {
            const error = 'gagal fetch data'
            dispatch(getPeopleDataError(error))
          })
    }
}

export const increment = () => ({
    type: 'INC',
})

export const decrement = () => ({
    type: 'DEC',
})

export const login = (payload) => ({
    type: 'LOGIN',
    payload,
})


export const modal = (payload) => ({
    type: 'MODAL',
    payload
})

export const getPeopleDataRequest = () => {
    return {
        type: 'GET_PEOPLE_DATA_REQUEST'
    }
}

export const getPeopleDataSuccess = (userpayload,todospayload) => {
    return {
        type: 'GET_PEOPLE_DATA_SUCCESS',
        userpayload,todospayload
    }
}

export const getPeopleDataError= () => {
    return {
        type: 'GET_PEOPLE_DATA_ERROR'
    }
}