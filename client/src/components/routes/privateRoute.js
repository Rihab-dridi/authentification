import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Route component={Component} {...rest} />
    </div>
  );
}
