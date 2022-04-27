import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define a type for the slice state
export interface UserInfoState {
  userInfo: {
    token: string;
    userType: 'email' | 'kakao' | '';
    userName?: string;
    email?: string;
    profilePicUrl?: string;
    age?: number;
  };
}

// Define the initial state using that type
const initialState: UserInfoState = {
  userInfo: {
    token: '',
    userType: '',
    userName: '',
    email: '',
    profilePicUrl: '',
    age: 0,
  },
};

export const loginSlice = createSlice({
  name: 'login',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    storeUserInfo: (state, action: PayloadAction<UserInfoState>) => {
      state.userInfo = action.payload.userInfo;
    },
  },
});

export const {storeUserInfo} = loginSlice.actions;

export default loginSlice.reducer;
