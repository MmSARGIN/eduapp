import { createSlice } from '@reduxjs/toolkit'

export const routeSlice = createSlice({
    name: 'route',
    initialState: {
        default: "default"
    },
    reducers: {
        router: (state, payload) => {
            console.log(state, payload);

        },

    }
})

// Action creators are generated for each case reducer function
export const { router } = routeSlice.actions

export default routeSlice.reducer