import { Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';


function App() {
  return (
    <>
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop">
            <ShopPage />
          </Route>
        </Switch>
      </PageContent>
      <Footer />
    </>
  );
}

export default App;