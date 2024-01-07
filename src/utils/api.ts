import { serverAxios } from "./axios";

export const getIssues = (page: number) =>
  serverAxios
    .get("", { params: { per_page: 10, page } })
    .then((res) => res.data);
