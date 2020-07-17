import { getHomeInfo } from "./music";

export const homeThunk = (store) => store.dispatch(getHomeInfo());
