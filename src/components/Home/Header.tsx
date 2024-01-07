import { LeftArrow, RightArrow } from "icons";

const Header = () => {
  return (
    <>
      <p className="pb-3 text-[#7B848C] font-bold">최진영</p>
      <p className="pt-8 text-xl text-[#14171A] leading-[30px] font-bold border-t border-[#DFE5EB]">
        이슈정리
      </p>
      <div className="pt-8 flex justify-between">
        <button className="w-[102px] h-10 flex justify-center items-center gap-x-1 text-[#14171A] border border-[#DFE5EB] rounded-[32px]">
          <p className="font-medium text-sm">이슈 상태</p>
          <LeftArrow />
        </button>
        <button className="flex justify-center items-center gap-x-0.5 text-[#5A6066]">
          <p className="font-medium text-sm">작성일 순</p>
          <RightArrow />
        </button>
      </div>
    </>
  );
};

export default Header;
