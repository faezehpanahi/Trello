import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Container/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
