import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import ShowNotification from "../../component/common/ShowNotification";
import { EndPoint } from "../services/ApiEndPoints";
import interceptor from "../services/Interceptor";

// createAsyncThunk
export const getAuth = createAsyncThunk(
  "auth/getAuthentication",
  async (userInfo) => {
    const response = await interceptor.post(EndPoint.LOGIN, userInfo);
    
    return response.data;
  }
);

// export const changePassword = createAsyncThunk(
//   "auth/changePassword",
//   async (passwordInfo, { rejectWithValue }) => {
//     try {
//       const response = await interceptor.put(EndPoint.CHANGE_PASSWORD, passwordInfo);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// Interface
interface Auth {
  data: [] | null;
  loading: boolean;
  message: string,
  isSuccess: boolean
}

const initialState: Auth = {
  data: null,
  loading: false,
  message: "",
  isSuccess: false
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = '';
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.data = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAuth.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAuth.fulfilled, (state, action) => {
      state.loading = false;
      
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.isSuccess = action.payload.success;
    });
    builder.addCase(getAuth.rejected, (state) => {
      state.loading = false;
    });
 
  },
});

export const { logout,reset } = AuthSlice.actions;
export default AuthSlice.reducer;
