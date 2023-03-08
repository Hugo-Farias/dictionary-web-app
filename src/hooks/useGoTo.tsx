import { useNavigate } from "react-router-dom";
import { formatForUrl } from "../helpers/functions";

function useGoTo() {
  const navigate = useNavigate();

  function navigateWithUnderscores(path: string, options?: any) {
    const pathWithUnderscores = formatForUrl(path);

    if (!pathWithUnderscores) return;
    navigate(pathWithUnderscores, options);
  }

  return navigateWithUnderscores;
}

export default useGoTo;
