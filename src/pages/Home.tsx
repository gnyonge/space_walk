import Header from "components/Home/Header";
import Table from "components/Home/Table";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="px-[60px] py-[72px]">
        <div className="px-5">
          <Header />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
