import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommentStore from "./commentStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import ProfileStore from "./profileStore";
import UserStore from "./userStore";

interface Store {
  activityStore: ActivityStore;
  commonStore: CommonStore;
  userStore: UserStore;
  modalStore: ModalStore;
  profileStore: ProfileStore;
  commentStore: CommentStore;
}

//это будет в нашем контексте
// создавая новые объекты типа ActivityStore, мы пополняем объект store
// и все они будут доступны в контексте StoreContext
export const store: Store = {
  activityStore: new ActivityStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  modalStore: new ModalStore(),
  profileStore: new ProfileStore(),
  commentStore: new CommentStore(),
};

//создаем реакт-контекст для этого
export const StoreContext = createContext(store);

//создаем хук, который позволит использовать store в компонентах
export function useStore() {
  return useContext(StoreContext);
}
