import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";

interface Store {
  activityStore: ActivityStore;
  commonStore: CommonStore;
}

//это будет в нашем контексте
// создавая новые объекты типа ActivityStore, мы пополняем объект store
// и все они будут доступны в контексте StoreContext
export const store: Store = {
  activityStore: new ActivityStore(),
  commonStore: new CommonStore(),
};

//создаем реакт-контекст для этого
export const StoreContext = createContext(store);

//создаем хук, который позволит использовать store в компонентах
export function useStore() {
  return useContext(StoreContext);
}
