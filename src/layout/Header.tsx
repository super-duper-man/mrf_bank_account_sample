import HeaderDateTime from "../components/HeaderDateTime";
import HeaderUserInfo from "../components/HeaderUserInfo";

function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-[110px] border-b-2 border-gray-300 px-7">
      <div className="flex justify-around items-center gap-4">
        <HeaderDateTime />
      </div>
      <div className="flex justify-between items-center gap-10">
        <HeaderUserInfo />
      </div>
    </div>
  );
}

export default Header;
