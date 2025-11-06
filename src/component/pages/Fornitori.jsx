import AddFornitori from "../organisms/addComponent/AddFornitori";
import Getfornitori from "../organisms/getComponent/Getfornitori";
import { jwtDecode } from "jwt-decode";
import UserFornitori from "../organisms/UserFornitori";

const Fornitori = () => {
  const token = localStorage.getItem("token");
  const ruolo = token ? jwtDecode(token).role : null;
  return (
    <div>
      <div className="grid grid-col-1 xl:grid-cols-3 3xl:grid-cols-4  gap-4 xl:items-start">
        <div className="bg-section-light xl:col-span-2 3xl:col-span-3  p-5 rounded-3xl shadow-lg dark:bg-section-dark 3xl:h-[800px] h-[750px] overflow-y-auto no-scrollbar ">
          <Getfornitori />
        </div>
        <div className="bg-section-light px-3  py-5 rounded-3xl shadow-lg dark:bg-section-dark">
          {ruolo === "ADMIN" ? <AddFornitori /> : <UserFornitori />}
        </div>
      </div>
    </div>
  );
};
export default Fornitori;
