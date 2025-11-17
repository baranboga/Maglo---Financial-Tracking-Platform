import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import SignInForm from "@/components/forms/SignInForm/SignInForm";
import Logo from "@/components/ui/Logo/Logo";
import signImage from "@/assets/images/auth/sign.png";

const SignIn = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex bg-white">
      <div className="flex-1 flex flex-col px-8 sm:px-12 lg:px-16 xl:px-24 bg-white">
        <div className="pt-8 pb-4">
          <Logo />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            <SignInForm />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 bg-gray-100 relative overflow-hidden">
        <img
          src={signImage}
          alt="Maglo Sign In"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignIn;
