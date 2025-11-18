import { useAuthStore } from "@/store/authStore";
import searchIcon from "@/assets/images/dashboard/topbar/search.png";
import notificationIcon from "@/assets/images/dashboard/topbar/notification.png";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 lg:px-8">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg mr-2"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="flex items-center">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Dashboard</h1>
      </div>

      <div className="relative ml-4 lg:ml-32 flex-1 mr-2 lg:mr-6 hidden md:block">
        <input
          type="text"
          placeholder=""
          className="w-full pl-6 pr-12 py-2 bg-gray-50 rounded-full text-sm focus:outline-none focus:bg-gray-100"
        />
        <img src={searchIcon} alt="Search" className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      <div className="flex items-center gap-2 lg:gap-4 ml-auto">
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors relative hidden md:block">
          <img src={notificationIcon} alt="Notifications" className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2 pl-2 lg:pl-4 border-l border-gray-200">
          <span className="text-sm font-medium text-gray-900">{user?.name || "User"}</span>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

