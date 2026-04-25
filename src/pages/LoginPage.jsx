import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../store/thunks/authThunks";

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const previousPath = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "onTouched",
  });

  const onSubmit = async (formValues) => {
    setLoading(true);

    try {
      await dispatch(loginUser(formValues));
      history.push(previousPath);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login başarısız. Email veya şifre hatalı olabilir."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#FAFAFA] px-4 py-10">
      <section className="mx-auto max-w-[500px] rounded-[8px] bg-white p-6 md:p-8">
        <h1 className="text-[32px] font-bold text-[#252B42]">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#252B42]">
              Email
            </label>

            <input
              type="email"
              className="w-full rounded border border-[#E6E6E6] px-4 py-3 outline-none"
              {...register("email", {
                required: "Email zorunlu.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Geçerli bir email gir.",
                },
              })}
            />

            {errors.email ? (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#252B42]">
              Password
            </label>

            <input
              type="password"
              className="w-full rounded border border-[#E6E6E6] px-4 py-3 outline-none"
              {...register("password", {
                required: "Password zorunlu.",
              })}
            />

            {errors.password ? (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            ) : null}
          </div>

          <label className="flex items-center gap-2 text-sm text-[#737373]">
            <input type="checkbox" {...register("rememberMe")} />
            Remember Me
          </label>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex min-w-[140px] items-center justify-center rounded bg-[#23A6F0] px-6 py-3 text-sm font-bold text-white disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-sm text-[#737373]">
          <p>Public users:</p>
          <p>customer@commerce.com / 123456</p>
          <p>store@commerce.com / 123456</p>
          <p>admin@commerce.com / 123456</p>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;