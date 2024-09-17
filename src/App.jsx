import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "../src/components/RestrictedRoute/RestrictedRoute.jsx";
import { PrivateRoute } from "../src/components/PrivateRoute/PrivateRoute.jsx";
import { refreshUser } from "./redux/auth/operations";
import { Layout } from "../src/components/Layout/Layout.jsx";
import { selectIsRefreshing } from "./redux/auth/selectors";

const Contacts = lazy(() =>
  import("../src/pages/ContactsPage/ContactPage.jsx")
);
const HomePage = lazy(() => import("../src/pages/HomePage/HomePage.jsx"));
const LoginPage = lazy(() => import("../src/pages/LoginPage/LoginPage.jsx"));
const RegistrationPage = lazy(() =>
  import("../src/pages/RegisterPage/RegisterPage.jsx")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
