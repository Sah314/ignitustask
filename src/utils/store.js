import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../reducers/postsReducer'
import usersReducer from '../reducers/usersReducer'

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
})

export default store;