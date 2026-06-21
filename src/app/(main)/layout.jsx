import Header from '@/components/shared/Header';
import Marqueee from '@/components/shared/Marquee';
import Navbar from '@/components/shared/Navbar';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <Marqueee/>
            <Navbar/>
            {children}
        </div>
    );
};

export default MainLayout;