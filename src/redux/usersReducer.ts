
const FOLLOW = 'FOLLOW USER'
const UNFOLLOW = 'UNFOLLOW USER'
const SET_USERS = 'SET USERS'

export type UserType =
{id: number, photoUrl: string, followed: boolean, fullName: string, status: string, location: {city: string, country: string}}

export type UsersType = {
    users: UserType[]
}


const initialState: UsersType = {
    users: [
        {id: 1, photoUrl: 'https://pop.inquirer.net/files/2021/05/gigachad.jpg', followed: false, fullName: 'Dmitriy', status: 'top', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl: 'https://pop.inquirer.net/files/2021/05/gigachad.jpg', followed: true, fullName: 'Dmitriy', status: 'top2', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, photoUrl: 'https://pop.inquirer.net/files/2021/05/gigachad.jpg', followed: false, fullName: 'Dmitriy', status: 'top3', location: {city: 'Kiev', country: 'Ukraine'}}
    ]
}





export const usersReducer = (state = initialState, action: TotalType) => {


     switch (action.type) {
         case FOLLOW:

             return {...state, users: state.users.map(el=> el.id === action.payload.userId ? {...el, followed: true} : el)}

         case UNFOLLOW:
             return {...state, users: state.users.map(el=> el.id === action.payload.userId ? {...el, followed: false} : el)}

         case SET_USERS:
             // return {...state, users: [...state.users, ...action.payload.users]}

         default: return state
     }

}

export type TotalType = FollowActionCreatorACType | UnFollowActionCreatorACType

export type FollowActionCreatorACType = ReturnType<typeof followAC>

export const followAC = (userId: number) => {
    return(
        {
            type: FOLLOW,
            payload: {
                userId
            }
        }
    )
}

export type UnFollowActionCreatorACType = ReturnType<typeof unFollowAC>

export const unFollowAC = (userId: number) => {
    return(
        {
            type: UNFOLLOW,
            payload: {
                userId
            }
        }
    )
}
export type setUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: any) => {
    return(
        {
            type: SET_USERS,
            payload: {
                users
            }
        }
    )
}

