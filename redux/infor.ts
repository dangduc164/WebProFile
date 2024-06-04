import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import _ from "lodash";
import { fetchApi } from "./api";
import { RootState } from "./store";
import axios, { AxiosResponse } from "axios";
import { log } from "console";

export interface intData {
  link_social: {
    github_url: string;
    zalo_url: string;
    facebook_url: string;
    twitter_url: string;
    instagram_url: string;
  };
  infor: {
    full_name: string;
    gender: Number;
    day: string;
    month: string;
    year: string;
    birthday_inder: string;
    email: string;
    address: string;
    phone_number: string;
    position_application: string;
    work_experience: string;
    active: Number;
    type: string;
    image_avatar: string;
  };
  content: [
    {
      title: string;
      description: string;
      order_number: Number;
    }
  ];
}

const getUserInfo = async (userId: number): Promise<intData | null> => {
  try {
    const response = await fetchApi<intData>(
      `/api/${userId}/info-customer`,
      "get"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user information:", error);
    return null;
  }
};

export default getUserInfo;
