import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Container/Main";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
