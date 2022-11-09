import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";
import moviesService from './moviesService';


export const getMovies = createAsyncThunk(
  'movies/getAll',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await moviesService.getSelectedMovies(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const searchMovies = createAsyncThunk(
  'movies/search',
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await moviesService.getSearchMovies(item);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

const initialState = {
  movies: [],
  filteredMovies:[],
  selectedMovies:[]
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: {
    [getMovies.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = null;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.filteredMovies = action.payload;
    },
    [getMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [searchMovies.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = null;
    },
    [searchMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.selectedMovies.push(action.payload);
    },
    [searchMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.movies,
      };
    },
  },
});

export const {reset } = moviesSlice.actions;
export default moviesSlice.reducer;
