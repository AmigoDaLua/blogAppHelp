import { createSlice } from "@reduxjs/toolkit";


// Criando o ESTADO INICIAL (requerido pelo REDUX)
const initialState = {
    status: false,
    userData: null,
}

// Criando o SLICE inicial ("pedaço" de DADOS)
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})


export const { login, logout } = authSlice.actions

// Os métodos que precisamos ficam no REDUCER (agente do REDUX no app)
export default authSlice.reducer