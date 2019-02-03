import axios from 'axios';

export const getPeopleData = () => {
    return (dispatch) => {
        dispatch(getPeopleDataRequest())
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((respon) => {
            dispatch(getPeopleDataSuccess(respon.data))
          })
          .catch(()=> {
            const error = 'gagal fetch data'
            dispatch(getPeopleDataError(error))
          })
    }
}

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