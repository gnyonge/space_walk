const Table = () => {
  return (
    <table className="mt-6 max-w-[1040px]">
      <thead>
        <tr className="h-8 bg-[#F5F8FA] text-sm text-[#5A6066] font-medium whitespace-nowrap">
          <th className="rounded-l-lg py-1.5 pl-3 pr-5">
            <p>번호</p>
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
        <tr className="text-sm text-[#5A6066] font-medium">
          <td className="py-2 pl-3 pr-5">
            <p>1</p>
          </td>
          <td className="pr-5">
            <p className="w-[421px] truncate">코멘트 수코멘트 수코멘트 수</p>
          </td>
          <td className="pr-5">
            <p>12312312</p>
          </td>
          <td className="text-center pr-5">
            <p>123123</p>
          </td>
          <td className="text-center pr-5">
            <p>123123123</p>
          </td>
          <td className="text-end pr-3">
            <p>2</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
