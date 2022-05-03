import USER_TYPES from './types'

export interface IUserState {
  name: string
}

const initialState: IUserState = {
  name: '',
}

export default function (state: IUserState = initialState, action): IUserState {
  switch (action.type) {
    case USER_TYPES.SET_NAME: {
      return {
        ...state,
        name: action.payload,
      }
    }
  }
  return state
}
