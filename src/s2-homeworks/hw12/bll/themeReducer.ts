
export type StateType = {
    themeId: number
} 

const initState: StateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export type changeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
