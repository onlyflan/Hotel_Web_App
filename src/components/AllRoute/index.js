import { useRoutes } from "react-router-dom";
import { routes } from "../../Routes";

const AllRoute = () => {
  const elements = useRoutes(routes);

  return (
    <>
      {elements}
    </>
  )
}

export default AllRoute;