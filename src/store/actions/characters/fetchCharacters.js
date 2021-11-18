import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const limit = 12;

export const fetchCharacters = createAsyncThunk('characters/getCharacters', async (page) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_URL}/characters?limit=${limit}&offset=${page * limit}`);
    return res.data;
})