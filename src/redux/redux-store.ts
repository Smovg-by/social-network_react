import { applyMiddleware, combineReducers, createStore } from 'redux'
import { profileReducer } from './profileReducer'
import { dialogsReducer } from './dialogsReducer'
import { sidebarReducer } from './sideBarReducer'
import { usersReducer, UserType } from './usersReducer'
import { authReducer } from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';


let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBarData: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store

export type Dialog = {
  id: number
  name: string
}

export type Messages = {
  id: number
  message: string
}

export type Posts = {
  id: number
  message: string
  likesCount: number
}

export type Friends = {
  id: number
  name: string
  avatar: string
}

export type profilePageType = {
  newPostText: string
  posts: Array<Posts>
  profile: any
}

export type dialogsPageType = {
  dialogs: Array<Dialog>
  messages: Array<Messages>
  newMessageBody: string
}

export type UsersPageType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

export type RootStateType = {
  profilePage: profilePageType
  dialogsPage: dialogsPageType
  sideBarData: Array<Friends>
  usersPage: UsersPageType
}

export type StoreType = {
  _state: RootStateType
  _callSubscriber: (_state: RootStateType) => void
  subscribe: (callback: () => void) => void
  getState: () => RootStateType
  dispatch: (action: any) => void
}

export type AddPostActionType = {
  type: 'ADD_POST'
  postMessage: string
}
export type UpdatePostTextType = {
  type: 'UPDATE_POST_TEXT'
  newText: string
}

export type UpdateNewMessageBodyActionType = {
  type: 'UPDATE_NEW_MESSAGE_BODY'
  body: string
}
export type SendMessageActionType = {
  type: 'SEND_MESSAGE'
  body: string
}

export type ActionType =
  | AddPostActionType
  | UpdatePostTextType
  | UpdateNewMessageBodyActionType
  | SendMessageActionType
