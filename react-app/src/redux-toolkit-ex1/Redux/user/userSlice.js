import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("user")),
  loginUser: JSON.parse(localStorage.getItem("loginUser")),
  isLoading: false,
};

export const fetchUsers = createAsyncThunk(
  "fetchUsers",
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      // Check if the response is not ok (i.e., status code is not in the 2xx range)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create user");
      }

      const userData = await response.json();
      return userData;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    editUserData: (state, action) => {
      const { id, name, avatar, password } = action.payload;
      const usersData = state.users;
      const updatedData = usersData.map((user) =>
        user.id === id ? { ...user, name, avatar, password } : user
      );
      state.users = updatedData;
      state.loginUser = action.payload;
      localStorage.setItem("user", JSON.stringify(updatedData));
      localStorage.setItem("loginUser", JSON.stringify(action.payload));
    },
    deleteUserData: (state, action) => {
      const usersData = state.users.filter(
        (user) => user.id !== action.payload
      );
      state.users = usersData;
      localStorage.setItem("user", JSON.stringify(usersData));
    },
    loginUser: (state, action) => {
      state.loginUser = action.payload;
      localStorage.setItem("loginUser", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.loginUser = null;
      localStorage.removeItem("loginUser");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      const userData = action.payload;
      const userArray = state.users ? [...state.users, userData] : [userData];
      state.users = userArray;
      localStorage.setItem("user", JSON.stringify(userArray));
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      alert("something went wrong " + action.payload);
    });
  },
});

export const { editUserData, deleteUserData, loginUser, logoutUser } =
  userSlice.actions;
export default userSlice.reducer;

// extraReducers: {
//     [fetchUsers.fulfilled]: (state, action) => {
//         localStorage.setItem('user', JSON.stringify(action.payload));
//         state.users = action.payload;
//     },
//     [fetchUsers.rejected]: (state, action) => {
//         console.log('Failed to fetch users', action.error);
//     },
//     [fetchUsers.pending]: (state) => {
//         state.loginUser = null;
//     }
// }
