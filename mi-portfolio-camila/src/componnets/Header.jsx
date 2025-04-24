const Header = ({ datos }) => {
  return (
    <div className="header">
      <br />
      <h1> Mi portfolio {datos.nombre} {datos.apellido} </h1>
      <br />
    </div>
  );
}

export default Header;
