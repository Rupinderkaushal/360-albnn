import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import Navbar  from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import SummaryPage from './Components/summarypage/SummaryPage';
import CoverSheet from './Components/coverSheet/CoverSheet';

import LeSubmission from './Components/lesubmission/LeSubmission';
import MonthWiseTrend from './Components/monthwisetrend/MonthWiseTrend';
import Sidebar from './Components/sidebar/Sidebar';
import { Provider } from 'react-redux';
import Store from './store/Store';
import NonPeopleData from './Components/nonpeopleData/NonPeopleData';
import PeopleData from './Components/peopledata/PeopleData';
import BarNewGraph from './Components/charts/BarNewGraph';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>

      <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
      <Route
        path="/"
        element={<Navigate to="/coversheet" replace />}
    />
        <Route exact path='/coversheet' element={<CoverSheet/>} />
        <Route exact path='/summarypage' element={<SummaryPage/>} />
        <Route exact path='/peopledata' element={<PeopleData/>} />
        <Route exact path='/nonpeopledata' element={<NonPeopleData/>} />
        <Route exact path='/lesubmission' element={<LeSubmission/>} />
        <Route exact path='/monthwisetrend' element={<MonthWiseTrend/>} />
        <Route exact path='/sidebar' element={<Sidebar/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
