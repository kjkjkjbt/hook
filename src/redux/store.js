import { configureStore } from "@reduxjs/toolkit";
import FontSizeReducer from "./Reducer/FontSizeReducer";
import CommentReducer from "./Reducer/CommentReducer";

export const store = configureStore({
  // state của toàn bộ ứng dụng
  reducer: {
    fsizeReducer: FontSizeReducer,
    commentReducer: CommentReducer,
  },
});
// fsizeReducer.fsize : 16
