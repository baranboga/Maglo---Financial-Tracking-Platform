import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import Logo from "@/components/ui/Logo/Logo";
import dashboardIcon from "@/assets/images/dashboard/sideBar/Dashboard.png";
import transactionsIcon from "@/assets/images/dashboard/sideBar/Transactions.png";
import invoicesIcon from "@/assets/images/dashboard/sideBar/Invoices.png";
import myWalletsIcon from "@/assets/images/dashboard/sideBar/My Wallets.png";
import settingsIcon from "@/assets/images/dashboard/sideBar/Settings.png";
import helpIcon from "@/assets/images/dashboard/sideBar/Help.png";
import logoutIcon from "@/assets/images/dashboard/sideBar/Logout.png";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/sign-in");
  };

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <img src={dashboardIcon} alt="Dashboard" className="w-5 h-5" />,
    },
    {
      label: "Transactions",
      path: "/transactions",
      icon: (
        <img src={transactionsIcon} alt="Transactions" className="w-5 h-5" />
      ),
    },
    {
      label: "Invoices",
      path: "/invoices",
      icon: <img src={invoicesIcon} alt="Invoices" className="w-5 h-5" />,
    },
    {
      label: "My Wallets",
      path: "/wallets",
      icon: <img src={myWalletsIcon} alt="My Wallets" className="w-5 h-5" />,
    },
    {
      label: "Settings",
      path: "/settings",
      icon: <img src={settingsIcon} alt="Settings" className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-white border-r border-gray-200 h-screen flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-6 border-b border-gray-200">
          <Logo />
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#C8EE44] text-gray-900 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-2">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 w-full text-left transition-colors">
            <img src={helpIcon} alt="Help" className="w-5 h-5" />
            <span>Help</span>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 w-full text-left transition-colors"
          >
            <img src={logoutIcon} alt="Logout" className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
