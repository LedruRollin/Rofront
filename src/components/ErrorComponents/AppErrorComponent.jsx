
import { useRouteError } from "react-router-dom";
import "./AppErrorComponent.css"

function AppErrorComponent() {
  const error = useRouteError();
  return (
    <div className="global-error-bar"> 
      Oh no, something went wrong :{"("}
      <ul>
        <li>
          <b>Type :</b> Error {error.status}
        </li>
        <li>
          <b>Message :</b> {error.data}
        </li>
        <li>
          <b>Stack :</b> {error.error.stack}
        </li>
      </ul>
    </div>
  )
}

export default AppErrorComponent;
