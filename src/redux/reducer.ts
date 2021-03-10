const defualtState = {
    user: {}
}

export default function reducer(
    state = defualtState,
    { type, payload }: { type: string, payload: any }
): any {

    switch (type) {
        case 'SET_USER_STATE':
            return {
                ...state,
                user: {
                    username: payload.split('@')[0]
                }
            }
    }

    return state
}