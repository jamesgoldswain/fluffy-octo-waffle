import MainDominos from "../components/MainDominos";
import PageTemplate from "../layout/PageTemplate";

const Home = () => {
    return (
        <PageTemplate 
        main={<MainDominos />} />
    );
};
export default Home;