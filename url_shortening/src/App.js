import './App.scss';
import Nav from './components/Nav'
import Description from './components/Description'
import Input from './components/Input'
import Info from './components/Info';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Nav />
      <Description />
      <Input />
      <Info />
      <Footer/>
    </div>

  );
}

export default App;
