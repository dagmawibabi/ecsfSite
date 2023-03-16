import ecsfLogo from '../assets/images/logo.png';

export const NavBar = () => {
    return (
        <div className="flex justify-between bg-gradient-to-b from-black to-transparent">
            <img src={ecsfLogo} className="p-5" alt="ecsfLogo" width="200px" height="200px" />
            <div className="text-white w-1/3 flex justify-evenly p-7 text-lg">
                <span> Events </span>
                <span> Gallery </span>
                <span> Resources </span>
                <span> About Us </span>
                <span> Contact Us </span>
            </div>
        </div>
    );
}