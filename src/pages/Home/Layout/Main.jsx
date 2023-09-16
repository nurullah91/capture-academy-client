
import { Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import { useContext } from 'react';
import { ThemeContext } from '../../../Providers/ThemeProvider';

const Main = () => {
    // import theme for dark mood light mood
    // eslint-disable-next-line no-unused-vars
    const {theme} = useContext(ThemeContext);

    const CAtheme = localStorage.getItem("CAtheme")
    return (
        <div data-theme={CAtheme}>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-68px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;