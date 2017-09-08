const initValue = {description: '', list: []}

export default (state = initValue, action) => {
    switch (action.type) {
        case 'CHANGE_DESCRIPTION':
            return {...state, description: action.payload}
        case 'SEARCH':
            return {...state, list: action.payload}
        case 'CLEAN_DESCRIPTION':
            return {...state, description: ''}
        default:
            return state
    }
}