import { atom } from "recoil";

export const modalContentState = atom({
  key: "modalContentState",
  default: "",
});

export const filterState = atom({
  key: "filterState",
  default: "all",
});

export const sortState = atom({
  key: "sortState",
  default: "created",
});
