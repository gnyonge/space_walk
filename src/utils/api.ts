import { serverAxios } from "./axios";

export const getIssues = (page: number, filter: string) =>
  serverAxios
    .get("", { params: { per_page: 10, page, state: filter } })
    .then((res) => res.data);
