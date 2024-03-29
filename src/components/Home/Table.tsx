import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { filterState, sortState } from "recoil/atoms";
import { getIssues } from "utils/api";
import { formatDate } from "utils/functions";

const Table = () => {
  const filter = useRecoilValue(filterState);
  const sort = useRecoilValue(sortState);
  const [page, setPage] = useState(1);

  const { data: issues, isLoading } = useQuery({
    queryKey: ["issues", page, filter, sort],
    queryFn: () => getIssues(page, filter, sort),
  });

  useEffect(() => {
    setPage(1);
  }, [filter, sort]);

  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <table className="w-full mt-6">
      <thead>
        <tr className="h-8 bg-[#F5F8FA] text-sm text-[#5A6066] font-medium whitespace-nowrap">
          <th className="text-start rounded-l-lg py-1.5 pl-3 pr-5">
            <p onClick={() => setPage((prev) => prev + 1)}>번호</p>
          </th>
          <th className="text-start pr-5">
            <p>제목</p>
          </th>
          <th className="text-start pr-5">
            <p>작성자</p>
          </th>
          <th className="text-center pr-5">
            <p>작성일</p>
          </th>
          <th className="text-center pr-5">
            <p>수정일</p>
          </th>
          <th className="text-end rounded-r-lg pr-3">
            <p>코멘트 수</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-2" />
        {issues.map((issue: any) => (
          <tr key={issue.id} className="text-sm text-[#5A6066] font-medium">
            <td className="py-2 pl-3 pr-5">
              <p>{issue.id}</p>
            </td>
            <td className="pr-5 w-[441px]">
              <p className="max-w-[421px] truncate">{issue.title}</p>
            </td>
            <td className="pr-5">
              <p>{issue.user.login}</p>
            </td>
            <td className="text-center pr-5">
              <p>{formatDate(issue.created_at)}</p>
            </td>
            <td className="text-center pr-5">
              <p>{formatDate(issue.updated_at)}</p>
            </td>
            <td className="text-end pr-3">
              <p>{issue.comments}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
