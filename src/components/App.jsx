
// React router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// React redux
import store from 'store/store'
import { Provider } from 'react-redux'

import 'styles/App.css';
import MainBody from 'components/MainBody';
import GlobalErrorBar from "components/ErrorComponents/AppErrorComponent"


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody/>,
    errorElement: <GlobalErrorBar/>,
  },
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
