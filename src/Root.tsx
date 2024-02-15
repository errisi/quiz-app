import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizPage } from './pages/quizPage/QuizPage';
import { App } from './App';
import { LoaderPage } from './pages/loaderPage/LoaderPage';
import { SuccessPage } from './pages/successPage/SuccessPage';
import { NotFoundPage } from './pages/notFoundPage/NotFoundPage';
import { EmailPage } from './pages/emailPage/EmailPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<QuizPage />} />

        <Route path='quiz/:page' element={<QuizPage />} />

        <Route path='loader/' element={<LoaderPage />} />
        <Route path='email/' element={<EmailPage />} />
        <Route path='success/' element={<SuccessPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
