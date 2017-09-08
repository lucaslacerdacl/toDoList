import axios from 'axios'

const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION'
const SEARCH = 'SEARCH'
const ADD = 'ADD'
const DONE = 'DONE'
const CLEAN_DESCRIPTION = 'CLEAN_DESCRIPTION'


const URL = "http://localhost:3003/api/todos"

export const handleDescriptionChange = (e) => (
    {
        type: CHANGE_DESCRIPTION,
        payload: e.target.value
    }
)

export const handleSearch = () => {
    return (dispatch, getState) => {
        let description = getState().todo.description
        let searchDescription = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${searchDescription}`)        
        .then(
            resp => dispatch({ type: SEARCH, payload: resp.data })
        )
        .catch(
            err => console.log(err)
        )
    }
}

export const handleAdd = description => {
    return dispatch => {
        axios.post(URL, {description})
        .then(
            () => dispatch(cleanDescription())
        )
        .then(
            () => dispatch(handleSearch())
        )
        .catch(
            err => console.log(err)
        )
    }
}

export const done = (todo, isDone) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: isDone})
        .then(
            () => dispatch(handleSearch())
        )
        .catch(
            err => console.log(err)
        )
    }
}

export const deleteTodo = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(
            () => dispatch(handleSearch())
        )
        .catch(
            err => console.log(err)
        )
    }
}

export const cleanDescription = () => {
    return [{
        type: CLEAN_DESCRIPTION
    }, handleSearch()]
}