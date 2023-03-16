import headerImage from '../assets/images/header2.png';
import { CTA } from './CTA';
import { NavBar } from './NavBar';

export const Header = () => {
    return (
        <div className="h-screen" style={{"backgroundImage": `url(${headerImage})`}}>
            <NavBar />
            <CTA />
        </div>
    );
}