import { configureStore } from "@reduxjs/toolkit";
import rocketReducer from "./rocketsSlice";

export default configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});
