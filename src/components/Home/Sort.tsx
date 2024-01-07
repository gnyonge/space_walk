import { Check } from "icons";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalContentState, sortState } from "recoil/atoms";

const Sort = () => {
  const setModalContent = useSetRecoilState(modalContentState);
  const [sort, setSort] = useRecoilState(sortState);

  return (
    <div className="w-[400px] p-5 pb-3">
      <p className="text-[#14171A] font-bold text-xl mb-2">정렬</p>
      <div className="text-[#363B40] font-medium text-lg">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            setSort("created");
            setModalContent("");
          }}
        >
          <p className="py-[15px]">작성일 순</p>
          {sort === "created" && <Check />}
        </div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            setSort("updated");
            setModalContent("");
          }}
        >
          <p className="py-[15px]">수정일 순</p>
          {sort === "updated" && <Check />}
        </div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            setSort("comments");
            setModalContent("");
          }}
        >
          <p className="py-[15px]">코멘트 순</p>
          {sort === "comments" && <Check />}
        </div>
      </div>
    </div>
  );
};

export default Sort;
