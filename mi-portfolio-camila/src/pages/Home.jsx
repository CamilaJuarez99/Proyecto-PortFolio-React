import Header from "../componnets/Header";
import Main from "../componnets/Main";
import Footer from "../componnets/Footer";


const Home = () => {
    const datos = {
        nombre: "Camila",
        apellido: "Juarez",
        imagen:"/imagenPerfil.jpg",
        presentacion:"Hola, mi nombres es Camila Juarez, actualmente me encuentro estudiando Programacion en la Facultad Regional Tucuman. Estoy en 2do año e la carrera, puedo manejar los siguientes lenguajes de programacion: java , javascript y c#",

    };

    return (
        <div>
      <Header datos={datos} />
      <Main datos={datos} />
      <Footer />
    </div>
  );

}

export default Home;