import Header from "../componnets/Header";
import Main from "../componnets/Main";
import Footer from "../componnets/Footer";


function Home () {
    const datos = {
        nombre: "Camila Juarez",
        apellido: "Juarez",
        imagen:"/imagenPerfil.jpg",
        presentacion:"Hola, mi nombres es Camila Juarez, actualmente me encuentro estudiando Programacion en la Facultad Rregional Tucuman. Estoy en 2do año e la carrera, puedo manejar los siguientes lenguajes de programacion: java , javascript y c#",

    };

    return (
        <div>
      <Header alumno={`${datos.nombre} ${datos.apellido}`} />
      <Main datos={datos} />
      <Footer />
    </div>
  );

}

export default Home;