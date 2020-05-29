import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Loader from "./components/Preloader/preloader";
import Navbar from "./components/layout/Navbar/Navbar";

import SpecialityContextProvider from "./contexts/specialityContext";
import AuthContextProvider from "./contexts/authContext";
import TopicsContextProvider from "./contexts/topicContext";
import ArticlesContextProvider from "./contexts/articleContext";
import HomeContextProvider from "./contexts/homeContext";
import CompleteProfile from "./components/auth/completeProfile";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ModeContextProvider from "./contexts/modeContext";

// Auth
const SignUp = React.lazy(() => import("./components/auth/SignUp"));
const SignIn = React.lazy(() => import("./components/auth/SignIn"));

// Article page
const selectedArticle = React.lazy(() =>
  import("./components/learn/articles/SelectedArticle")
);
const PreviewPage = React.lazy(() =>
  import("./components/learn/preview/PreviewPage")
);

// Components
const Home = React.lazy(() => import("./components/home/home"));
const About = React.lazy(() => import("./components/aboutUs/about"));
const Learn = React.lazy(() => import("./components/learn/learn"));

const EditHomepage = React.lazy(() =>
  import("./components/home/EDIT/editHomepage")
);
const EditCard = React.lazy(() =>
  import("./components/learn/learningCards/UpdateCard")
);
const AddCard = React.lazy(() =>
  import("./components/learn/learningCards/AddCard")
);
const AddArticle = React.lazy(() =>
  import("./components/learn/articles/addArticle")
);
const UpdateArticle = React.lazy(() =>
  import("./components/learn/articles/updateArticle")
);
const AdminPanel = React.lazy(() =>
  import("./components/adminPanel/adminPanel")
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContextProvider>
          <SpecialityContextProvider>
            <TopicsContextProvider>
              <ArticlesContextProvider>
                <HomeContextProvider>
                  <ModeContextProvider>
                    <Navbar />
                    <AnimatePresence>
                      <Switch>
                        <React.Suspense fallback={<Loader />}>
                          <Route exact path="/" component={Home} />
                          <Route path="/about" component={About} />
                          <Route exact path="/learn" component={Learn} />
                          <Route exact path="/signup" component={SignUp} />
                          <Route
                            exact
                            path="/signup/:referCode"
                            component={SignUp}
                          />
                          <Route path="/login" component={SignIn} />
                          <Route
                            exact
                            path="/:specialityId/:topicId/:Id"
                            component={selectedArticle}
                          />
                          <Route
                            exact
                            path="/learn/:specialityName"
                            component={PreviewPage}
                          />
                          <Route
                            exact
                            path="/adminpanel"
                            component={AdminPanel}
                          />
                          <Route
                            exact
                            path="/edit/homepage"
                            component={EditHomepage}
                          />
                          <Route
                            exact
                            path="/updatespeciality/:specailaityId"
                            component={EditCard}
                          />
                          <Route exact path="/addcard" component={AddCard} />
                          <Route
                            exact
                            path="/article/add/:SpecialityId/:id"
                            component={AddArticle}
                          />
                          <Route
                            exact
                            path="/article/update/:SpecialityId/:TopicId/:ArticleId"
                            component={UpdateArticle}
                          />
                          <Route
                            exact
                            path="/completeProfile"
                            component={CompleteProfile}
                          />
                        </React.Suspense>
                      </Switch>
                    </AnimatePresence>
                  </ModeContextProvider>
                </HomeContextProvider>
              </ArticlesContextProvider>
            </TopicsContextProvider>
          </SpecialityContextProvider>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
