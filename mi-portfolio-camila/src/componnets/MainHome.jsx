import 'bootstrap/dist/css/bootstrap.min.css';
import Bienvenida from './Bienvenida';
import Proyects from '../pages/Proyects';
import MainProyects from './MainProyects';
import "../css/main.css"
import MainAbout from './MainAbout';


const MainHome = () => {
  return (
    
    
  <div>
    <Bienvenida/>
    <MainAbout/>
    <MainProyects/>
    
  </div>
  );
};

export default MainHome;
