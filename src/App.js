
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Login from './views/login';
import Articles from './views/articles';
import ArticleDetails from './views/article-details';
import AddArticle from './views/add-article';

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/articles" element={<Articles />} />
          <Route path='article-details/:id' element={<ArticleDetails />} />
          <Route path='add-article' element={<AddArticle />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
