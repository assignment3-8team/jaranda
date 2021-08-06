import PageHeader from "pages/PageHeader";
import './style.css';

const Home = (props) => {
  return (
        <>
        <PageHeader title="홈" englishTitle="Home"/>
        <section className='home-content'>
            <img src='/assets/home.svg'/>
        </section>
        </> 
    );
};

export default Home;
