import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";

const LogOut = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate("/");
          localStorage.removeItem("token");
          localStorage.removeItem("ruolo");
        }}
        text={"log out"}
        variant={"secondary"}
      />
    </div>
  );
};

export default LogOut;
