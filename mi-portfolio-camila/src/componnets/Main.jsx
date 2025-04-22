function Main({ datos }) {
  return (
    <div className="card">
      <img src={datos.imagen} alt="Perfil" />
      <p>{datos.presentacion}</p>
    </div>
  );
}

export default Main;
