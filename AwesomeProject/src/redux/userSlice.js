import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signOut} from 'firebase/auth'

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
        await AsyncStorage.setItem("userToken", token)

        return userData
    } catch (error) {
        console.log("userSlice 20 line", error)
        throw error
        
    }
})


export const autoLogin = createAsyncThunk('user/autoLogin', async()=>{
    try {
        const token = await AsyncStorage.getItem('userToken')
        if(token){
            return token
        }else{
            throw new Error('user not found')
        }

    } catch (error) {
        throw error
    }
})


export const signup = createAsyncThunk('user/signup', async ({ email, password }) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = user.stsTokenManager.accessToken;
      await sendEmailVerification(user)

      await AsyncStorage.setItem("userToken", token)
  
      console.log("Kullanıcı başarıyla oluşturuldu:", user.uid);
  
      return token;

    } catch (error) {
      console.error("Kullanıcı oluşturma hatası:", error.message);
      throw error;
    }
  });

export const logout = createAsyncThunk('user/signOut', async()=>{
    try {
        const auth = getAuth()
        const userSignOut = await signOut(auth)
        await AsyncStorage.removeItem('userToken')
        console.log("çıkış yaptın")
        return  userSignOut
    } catch (error) {
        console.log("çıkış olmadı", error.message)
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


                .addCase(signup.pending, (state)=>{
                    state.isloading = true
                    state.isAuth = false
                })
                .addCase(signup.fulfilled, (state, action)=>{
                    state.isloading = false;
                    state.isAuth = true;
                    state.token = action.payload;
                    
                })
                .addCase(signup.rejected, (state, action)=>{
                    state.isloading = false;
                    state.isAuth = false;
                    state.error = action.error.message;
                })


                .addCase(logout.pending,(state)=>{
                    state.isloading = true
                    state.isAuth = false
                })
                .addCase(logout.fulfilled,(state, action)=>{
                    state.isloading = false
                    state.isAuth = false
                    state.token = action.payload
                })
                .addCase(logout.rejected,(state, action)=>{
                    state.isloading = false
                    state.isAuth = false
                    state.error = action.error.message
                })

                
                .addCase(autoLogin.pending, (state)=>{
                    state.isloading = true
                    state.isAuth = false
                })
                .addCase(autoLogin.fulfilled, (state, action)=>{
                    state.isloading = false
                    state.isAuth = true
                    state.token = action.payload
                })
                .addCase(autoLogin.rejected, (state, action)=>{
                    state.isloading = false
                    state.isAuth = false
                    state.error = action.error.message
                })

    }
})



export const {setEmail, setPassword, setIsLoading, } = userSlice.actions
export default userSlice.reducer;