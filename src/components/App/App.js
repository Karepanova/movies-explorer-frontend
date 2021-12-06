// корневой компонент приложения (CRA)
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch } from "react-router-dom";


function App() {
 return (
  <div className="App">
   <Header />

   <div className="App__page">
    <Switch>
     <Route exact path="/">
      <Main/>
     </Route>
    </Switch>
   </div>
    <Footer />
  </div>
 );
}

export default App;


