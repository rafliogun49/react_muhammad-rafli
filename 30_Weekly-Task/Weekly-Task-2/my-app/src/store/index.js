import {configureStore} from "@reduxjs/toolkit";
import summarySlice from "./resume-slice";

const store = configureStore({
  reducer: {
    summary: summarySlice.reducer,
  },
});
export default store;
