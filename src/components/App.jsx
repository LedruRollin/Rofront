
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import store from 'store/store'
import { Provider } from 'react-redux'

import 'styles/App.css';
import GlobalErrorBar from "components/ErrorComponents/AppErrorComponent"
import LoginForm from "components/LoginPage/LoginForm"
import MainBody from 'components/MainBody';
import { isAuthenticated } from "utils/auth";


// HOC component ensuring authentification
const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const isauth = isAuthenticated()
    if (!isauth) {
      localStorage.setItem("userToken", null);
      localStorage.setItem("userTokenExpiration", null);
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };

  return <AuthenticatedComponent/>;
};


const router = createBrowserRouter([
  {
    errorElement: <GlobalErrorBar />,
    children: [
      {
        path: "/login",
        element: <LoginForm/>,
      },
      {
        path: "/",
        element: withAuth(MainBody),
      },
    ]
  }
]);


function App() {
  return (
    <div className="App">
      <div>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </div>
    </div>
  );
}

export default App;
