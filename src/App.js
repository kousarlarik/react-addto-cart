import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Header from "./components/header/Header"; // Corrected the path
import MyAppBar from "./components/AppBar";
import Products from "./components/Product/Products";

function App() {
  return (
    
    <div className="app">
      <MyAppBar/>
      <Products/>
      </div>
  );
}

export default App;
