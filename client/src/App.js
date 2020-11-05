import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'antd/dist/antd.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import TestPage from './components/TestPage'
import Mypage from './components/Mypage'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <section style={{ padding: '20px'}}>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/test' component={TestPage} />
          <Route exact path='/mypage' component={Mypage} />
        </section>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
