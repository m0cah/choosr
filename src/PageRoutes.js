import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { SearchPage } from './pages/SearchPage.js';
import { SwipePage } from './pages/SwipePage.js';
import { NotFoundPage } from './pages/NotFoundPage.js';


export const PageRoutes = () => {

    return(
      <Router>
        <Routes>

          <Route path="/" element={<SearchPage />} />

          <Route path="/?" element={<SearchPage />} />
          
          <Route path="/swipe" element={<SwipePage />} />

          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </Router>
    );

}
