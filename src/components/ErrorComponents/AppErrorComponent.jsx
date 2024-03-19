
import { useRouteError } from "react-router-dom";
import "./AppErrorComponent.css"

function AppErrorComponent() {
  const error = useRouteError();
  return (
    <div className="global-error-bar"> 
      Oh no, something went wrong :{"("}
      <ul>
        <li>
          <b>Type :</b> {error.name}
        </li>
        <li>
          <b>Message :</b> {error.message}
        </li>
        <li>
          <b>Stack :</b> {error.stack}
        </li>
      </ul>
    </div>
  )
}

export default AppErrorComponent;
