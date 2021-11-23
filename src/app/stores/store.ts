import ArticleStore from "./ArticleStore";
import {createContext, useContext} from "react";

/**
 * Store interface
 */
interface Store {
    ArticleStore: ArticleStore
}

/**
 * create context container
 * if we need more stores just add it here
 * this object contain instance of our store
 * in this simple app we need only single store
 */
export const store: Store = {
    ArticleStore: new ArticleStore()
}

// create store context, to make our store available in react context
export const StoreContext = createContext(store);

// create simple react hook to allow us to use sores in components
export function useStore() {
    return useContext(StoreContext);
}