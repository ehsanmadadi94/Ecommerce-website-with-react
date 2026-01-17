import { configureStore } from "@reduxjs/toolkit";
// ...

export const store = configureStore({
    reducer: {

    }
})
//Infer the 'RootState" and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>
//Inferred type: {posts: PostState, comments: CommentState, users: UserState}
export type AppDispatch = typeof store.dispatch
