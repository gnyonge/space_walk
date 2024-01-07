import { serverAxios } from "./axios";

export const getIssues = (page: number, filter: string, sort: string) =>
  serverAxios
    .get("", { params: { per_page: 10, state: filter, page, sort } })
    .then((res) => res.data);
