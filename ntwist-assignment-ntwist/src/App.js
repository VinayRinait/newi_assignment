import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/Home";
import AppHeader from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
