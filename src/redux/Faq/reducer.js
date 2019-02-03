const initialState = {
    people: [],
    todos: [],
    isLoading: false,
    error: {
        status: false,
        message: '',
    }
}

const Faq = (state = {...initialState}, action) => {
    switch (action.type) {
        
        case 'GET_PEOPLE_DATA_REQUEST':
        return{
            ...state,
            isLoading: true
        }

        case 'GET_PEOPLE_DATA_SUCCESS':
        return{
            ...state,
            isLoading: false,
            people: action.userpayload,
            todos: action.todospayload
        }

        case 'GET_PEOPLE_DATA_ERROR':
        return{
            ...state,
            isLoading: false,
            error: {
                status: true,
                message: action.payload
            }
        }

        default:
            return state
    }
}

export default Faq;