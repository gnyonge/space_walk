import Header from "components/Home/Header";
import Table from "components/Home/Table";

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="lg:px-[60px] py-[72px]">
        <div className="min-w-[600px] px-5">
          <Header />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
