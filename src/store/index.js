import { createStore } from "redux";

import reducers from "./ducks";

const store = createStore(reducers);

export default store;
