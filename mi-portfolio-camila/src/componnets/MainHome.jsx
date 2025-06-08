import 'bootstrap/dist/css/bootstrap.min.css';
import Bienvenida from './Bienvenida';
import Proyects from '../pages/Proyects';
import MainProyects from './MainProyects';
import "../css/main.css"
import MainAbout from './MainAbout';
import Manejar from './Manejar';



const MainHome = () => {
  return (
    
    
  <div>
    <Bienvenida/>
    <MainAbout/>
    <Manejar/>
    <MainProyects/>

  </div>
  );
};

export default MainHome;
