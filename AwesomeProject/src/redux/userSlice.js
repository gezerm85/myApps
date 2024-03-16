import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export const login = createAsyncThunk('user/login', async({email, password}) =>{
    try {
        const auth = getAuth()
        const userCredential = await signInWithEmailAndPassword(auth,email, password)

        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;

        const userData ={
            token,
            user: user,

        }

        return userData
    } catch (error) {
        console.log("userSlice 20 line", error)
        throw error
        
    }
})


const initialState ={
    email: null,
    password: null,
    isloading: false,
    isAuth: false,
    token: null,
    user: null,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setEmail: (state, action)=>{
            const loverCaseEmail = action.payload.toLowerCase();
            state.email = loverCaseEmail
        },
        setPassword: (state, action)=>{
            state.password = action.payload
        },
        setIsLoading: (state, action)=>{
            state.isloading = action.payload
        },
 
    },
    extraReducers: (builder)=>{
        builder
                .addCase(login.pending, (state)=>{
                    state.isloading = true;
                    state.isAuth = false;
                })
                .addCase(login.fulfilled, (state, action)=>{    
                    state.isloading = false;
                    state.isAuth = true;
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                })
                .addCase(login.rejected, (state, action)=>{
                    state.isloading = false;
                    state.isAuth = false;
                    state.error = action.error.message;
                })
    }
})



export const {setEmail, setPassword, setIsLoading, } = userSlice.actions
export default userSlice.reducer;