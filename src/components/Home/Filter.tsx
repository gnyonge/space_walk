import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { filterState, modalContentState } from "recoil/atoms";

const ClickedButton = "text-white bg-[#1A8CFF]";
const UnclickedButton = "text-[#363B40] bg-white border border-[#DFE5EB]";

const Filter = () => {
  const setModalContent = useSetRecoilState(modalContentState);
  const [filter, setFilter] = useRecoilState(filterState);
  const [state, setState] = useState(filter);

  return (
    <div className="p-5 pt-6">
      <p className="text-[#14171A] text-lg font-bold mb-5">이슈 상태</p>
      <div className="flex gap-x-2">
        <button
          type="button"
          onClick={() => setState("all")}
          className={`py-2.5 px-3.5 font-medium text-sm rounded-[30px] ${
            state === "all" ? ClickedButton : UnclickedButton
          }`}
        >
          전체
        </button>
        <button
          type="button"
          onClick={() => setState("open")}
          className={`py-2.5 px-3.5 font-medium text-sm rounded-[30px] ${
            state === "open" ? ClickedButton : UnclickedButton
          }`}
        >
          open
        </button>
        <button
          type="button"
          onClick={() => setState("closed")}
          className={`py-2.5 px-3.5 font-medium text-sm rounded-[30px] ${
            state === "closed" ? ClickedButton : UnclickedButton
          }`}
        >
          closed
        </button>
      </div>
      <button
        type="button"
        onClick={() => {
          setFilter(state);
          setModalContent("");
        }}
        className="w-[350px] mt-8 py-3 px-4 font-bold rounded-[10px] text-white bg-[#1A8CFF]"
      >
        적용
      </button>
    </div>
  );
};

export default Filter;
