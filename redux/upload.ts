import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import _ from "lodash";
import { fetchApi } from "./api";
import { RootState } from "./store";
import axios from "axios";

const initialState = {};

export const uploadFile = createAsyncThunk(
    "api/admin/upload-avatar",
    async (file: any) => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/upload-avatar`,
          file
        );
  
        return response.data.data;
      } catch (error) {
        return [];
      }
    }
  );

export const infoSlice = createSlice({
	name: "infor",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// builder
	},
});

export const inforReducer = (state: RootState) => state.inforReducer;
export default infoSlice.reducer;

