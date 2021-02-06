import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { addBackToTop } from 'vanilla-back-to-top';

import Container from './components/Container';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import LoaderComponent from './components/LoaderComponent';

import techSkills from './data/techSkills.json';
import commandProjects from './data/commandProjects.json';
import ownProjects from './data/ownProjects.json';
import experience from './data/experience.json';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);

const ProjectsView = lazy(() =>
  import('./views/ProjectsView' /* webpackChunkName: "projects-view" */),
);

const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "not-found-view" */),
);

function App() {
  useEffect(() => {
    addBackToTop({
      backgroundColor: '#ff6b08',
    });
  }, []);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          <Route path="/" exact>
            <HomeView techSkills={techSkills} />
          </Route>

          <Route path="/projects" exact>
            <ProjectsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>

      <Footer />
    </Container>
  );
}

export default App;
