const initialState = {
    age: '',
    number: 0,
    isLogin: false,
    name: '',
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
        case 'INC': 
        return {
            ...state,
            number: state.number + 1
        }

        case 'DEC': 
        return {
            ...state,
            number: state.number - 1,
        }

        case 'LOGIN':
        return{
            ...state,
            isLogin: action.payload,
        }

        case 'MODAL':
        return{
            ...state,
            people: action.payload,
            show: true
        }
        
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