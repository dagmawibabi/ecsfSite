import './App.css';
import { AboutUs } from './components/AboutUs';
import { Header } from './components/Header';
import { UpcomingEvents } from './components/UpcomingEvents';
// import { NavBar } from './components/NavBar';


function App() {
  return (
    <div className="bg-gray-500">
        <Header />
        <AboutUs />
        <UpcomingEvents />
    </div>
  );
}

export default App;
