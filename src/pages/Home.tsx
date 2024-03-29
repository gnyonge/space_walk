import { Filter, Header, Sort, Table } from "components/Home";
import Modal from "components/Modal";
import { useRecoilValue } from "recoil";
import { modalContentState } from "recoil/atoms";

const Home = () => {
  const modalContent = useRecoilValue(modalContentState);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="lg:px-[60px] py-[72px]">
        <div className="min-w-[600px] px-5">
          <Header />
          <Table />
        </div>
      </div>
      <Modal>
        {modalContent === "Filter" && <Filter />}
        {modalContent === "Sort" && <Sort />}
      </Modal>
    </div>
  );
};

export default Home;
