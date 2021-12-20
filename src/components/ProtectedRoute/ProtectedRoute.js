import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Preloader from "../Preloader/Preloader";

//HOC-компонент - высокого порядка -  возвращает компонент Route
//Если значение loggedIn — true, Route отрисует компонент, который передан
// HOC-компоненту как пропс, включая переданные пропсы.
// Если значение false — вернёт компонент Redirect и переадресует пользователя на страницу авторизации.

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
   <Route>
     {() =>
      props.isLoading ? <Preloader /> : props.loggedIn ? <Component {...props} /> : <Redirect to="/signin" />
     }
   </Route>
  );
};

export default ProtectedRoute;