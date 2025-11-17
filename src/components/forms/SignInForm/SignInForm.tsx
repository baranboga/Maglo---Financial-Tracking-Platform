import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import {
  signInSchema,
  type SignInFormData,
} from "@/lib/validations/authSchemas";
import { authApi } from "@/lib/api/auth";
import { useAuthStore } from "@/store/authStore";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import vectorImage from "@/assets/images/auth/vector 11.png";

const SignInForm = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const mutation = useMutation({
    mutationFn: authApi.signIn,
    onSuccess: (response) => {
      if (response.success && response.data) {
        login(
          response.data.user.email,
          response.data.user.fullName,
          response.data.accessToken
        );
        toast.success(response.message || "Sign in successful!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      } else {
        toast.error("Unexpected response format");
      }
    },
    onError: (error: unknown) => {
      let errorMessage = "An error occurred while signing in";

      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{
          message?: string;
          error?: string;
          errors?: Array<{ message?: string }>;
        }>;

        if (axiosError.response?.data) {
          const data = axiosError.response.data;

          if (typeof data === "string") {
            errorMessage = data;
          } else if (data && typeof data === "object") {
            errorMessage =
              data.message ||
              data.error ||
              (Array.isArray(data.errors) && data.errors[0]?.message) ||
              axiosError.response.statusText ||
              errorMessage;
          }
        } else if (axiosError.message) {
          errorMessage = axiosError.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast.error(errorMessage);
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
        <p className="text-gray-600">Welcome back! Please enter your details</p>
      </div>

      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="example@gmail.com"
        error={errors.email?.message}
        disabled={isSubmitting}
        {...register("email")}
      />

      <Input
        id="password"
        type="password"
        label="Password"
        placeholder="••••••••"
        error={errors.password?.message}
        disabled={isSubmitting}
        {...register("password")}
      />

      <Button
        type="submit"
        variant="primary"
        fullWidth
        isLoading={isSubmitting || mutation.isPending}
        style={{
          backgroundColor: "#C8EE44",
          color: "#000",
        }}
        className="hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-[#C8EE44]"
      >
        Sign In
      </Button>

      <Button
        type="button"
        variant="secondary"
        fullWidth
        className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
      >
        <div className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>Sign in with google</span>
        </div>
      </Button>

      <div className="text-center text-sm">
        <span className="text-gray-600">Don't have an account? </span>
        <span className="inline-block relative">
          <Link
            to="/sign-up"
            className="font-medium text-gray-900"
          >
            Sign up
          </Link>
          <img
            src={vectorImage}
            alt=""
            className="absolute -bottom-1 left-0 w-full h-1"
          />
        </span>
      </div>
    </form>
  );
};

export default SignInForm;
