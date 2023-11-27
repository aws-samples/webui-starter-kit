// Elements, Hooks
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// Components
import Homepage from './pages/Homepage/Homepage';
import TableView from './pages/TableView/TableView';
import DetailsView from './pages/DetailsView/DetailsView';
import CardsView from './pages/CardsView/CardsView';
import Chatbot from './pages/Chatbot/Chatbot';
import AnalyticsView from './pages/AnalyticsView/AnalyticsView';

// Styles
import "@cloudscape-design/global-styles/index.css"

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/tableview" element={<TableView />} />
        <Route path="/detailsview" element={<DetailsView />} />
        <Route path="/cardsview" element={<CardsView />} />
        <Route path="/chatbotview" element={<Chatbot />} />
        <Route path="/analyticsview" element={<AnalyticsView />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
