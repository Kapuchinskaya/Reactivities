import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

interface Store {
  activityStore: ActivityStore;
}

//это будет в нашем контексте
// создавая новые объекты типа ActivityStore, мы пополняем объект store
// и все они будут доступны в контексте StoreContext
export const store: Store = {
  activityStore: new ActivityStore(),
};

//создаем реакт-контекст для этого
export const StoreContext = createContext(store);

//создаем хук, который позволит использовать store в компонентах
export function useStore() {
  return useContext(StoreContext);
}
