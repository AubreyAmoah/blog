import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Logo = () => {
  return (
    <div className="text-3xl font-bold text-center py-4 font-heading">
      Smart Blog
      <FontAwesomeIcon icon={faBrain} className="text-2xl text-slate-400" />
    </div>
  );
};
