import Footer from "./Footer.jsx";

function App() {
  let nombre = "pepe";

  const sumar = () => {
    console.log(5 + 2);
  };

  return (
    <div>
      <h1>Hole {nombre}</h1>;<button onClick={sumar}>Sumar</button>;
      <Footer />
    </div>
  );
}

export default App;
