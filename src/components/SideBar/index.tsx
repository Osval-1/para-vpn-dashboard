import { dashboard} from "../../assets";
import SidebarItem from "../SideBarItem";

const SideBar = () => {
  return (
    <section className="border-r w-[18.5%] min-h-screen">
      <section>
        <SidebarItem itemName="Dashboard" image={dashboard} />
      </section>
    </section>
  );
};

export default SideBar;
