import Home from '../components/Home';

const HomePage = (props) => <Home page={parseFloat(props.query.page) || 1} />;

export default HomePage;
