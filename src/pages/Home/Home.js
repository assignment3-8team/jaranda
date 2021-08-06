import PageHeader from "pages/PageHeader";
import './style.css';

const Home = (props) => {
  return (
        <>
        <PageHeader title="홈" englishTitle="Home"/>
        <section className='home-content'>
            <img alt="homeContent" src='/assets/home.png'/>
        </section>
        </> 
    );
};

export default Home;
