import { useNavigate } from "@remix-run/react";

const Button = ({ text, click, type, url, iconClass }) => {
  const navigate = useNavigate();
  const changeRoute = (url) => {
    navigate(url);
  };
  return (
    <button className="btn btn-primary" type={type} onClick={!url ? () => click() : () => changeRoute(url)}>
      {!iconClass ? text : <i className={iconClass}></i>}
    </button>
  );
};

export default Button;
