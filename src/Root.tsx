import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QuizPage } from './pages/quizPage/QuizPage';
import { App } from './App';
import { LoaderPage } from './pages/loaderPage/LoaderPage';
import { SuccessPage } from './pages/successPage/SuccessPage';
import { NotFoundPage } from './pages/notFoundPage/NotFoundPage';
import { EmailPage } from './pages/emailPage/EmailPage';
import store from './store/store';

export const Root = () => (
  <Provider store={store}>
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
  </Provider>
);
