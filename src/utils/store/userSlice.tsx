import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "./interfaces/User";

const cookies = new Cookies();

const initialState: IUserState = {
  isLoggedIn: cookies.get("jwt") ? true : false,
  token: cookies.get("jwt"),
  sessionRemainingTime: Number(localStorage.getItem("expirationTime")),
};

export const UserSlice = createSlice({
  name: "UserController",
  initialState,
  reducers: {
    login: () => {},
    logout: () => {},
    register: () => {},
    forgotPassword: () => {},
  },
});
