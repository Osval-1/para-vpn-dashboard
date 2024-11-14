import {
  header_search,
  logo,
  menu,
  notification,
  profile_image,
  search,
  settings,
} from "../../assets";

const Header = () => {
  return (
    <section className="h-20  flex py-4 md:py-0 border-b lg:border-none">
      <section className="pl-5 flex flex-row gap-4 lg:border-r  lg:w-[18.5%] h-full items-center">
        <figure>
          <img src={logo} alt="logo" className=" hidden lg:flex" />
        </figure>
        <h1 className="text-md lg:text-xl text-text-header font-extrabold font-mont hidden lg:flex ">
          PARA DASH
        </h1>
        <figure className="flex lg:hidden">
          <img src={menu} alt="menu" className="w-12 h-12 border-text-header" />
        </figure>
      </section>
      <section className="flex flex-row w-full md:w-4/5 justify-between px-7 items-center h-full lg:border-b gap-3 ">
        <p className="text-2xl text-text-header font-semibold ">
          Services
        </p>
        <div className="flex w-full md:w-3/5 gap-5 justify-end ">
          <div className="hidden sm:flex flex-row bg-background-input rounded-3xl  w-3/5  h-10 pl-4 items-center gap-2 ">
            <img src={search} alt="search " className="w-4 h-4 " />
            <p
              className="text-xs font-light font-inter"
              style={{ color: "#8BA3CB" }}
            >
              Search for something
            </p>
          </div>
          <div className="flex gap-5">
            <div className="hidden md:flex bg-background-input h-10 w-10 justify-center items-center rounded-full ">
              <img src={settings} alt="settings" className="" />
            </div>
            <div className="hidden md:flex bg-background-input h-10 w-10 justify-center items-center rounded-full">
              <img src={notification} alt="notification" />
            </div>
            <img
              src={profile_image}
              alt="profile image"
              className="w-11 h-11 pl-1 hidden md:flex"
            />
            <img
              src={header_search}
              alt="search"
              className="sm:hidden w-8 h-8 self-end"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
