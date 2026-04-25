import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/axios";
import { fetchRolesIfNeeded } from "../store/thunks/clientThunks";

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

const TAX_NO_REGEX = /^T\d{4}V\d{6}$/;
const TR_PHONE_REGEX = /^(?:\+90|90|0)?5\d{9}$/;
const IBAN_REGEX = /^TR\d{24}$/;

function SignupPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const roles = useSelector((state) => state.client.roles);

  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      role_id: "",
      store: {
        name: "",
        phone: "",
        tax_no: "",
        bank_account: "",
      },
    },
    mode: "onTouched",
  });

  const rolesLoading = roles.length === 0;
  const selectedRoleId = watch("role_id");
  const passwordValue = watch("password");

  const selectedRole = useMemo(() => {
    return roles.find((role) => String(role.id) === String(selectedRoleId));
  }, [roles, selectedRoleId]);

  const isStoreSelected = useMemo(() => {
    if (!selectedRole) return false;

    const roleName =
      selectedRole.name ||
      selectedRole.label ||
      selectedRole.authority ||
      "";

    return roleName.toLowerCase().includes("store");
  }, [selectedRole]);

  useEffect(() => {
    dispatch(fetchRolesIfNeeded());
  }, [dispatch]);

  useEffect(() => {
    if (roles.length > 0) {
      const customerRole = roles.find((role) => {
        const roleName =
          role.name || role.label || role.authority || "";
        return roleName.toLowerCase().includes("customer");
      });

      if (customerRole) {
        setValue("role_id", String(customerRole.id));
      } else if (roles[0]) {
        setValue("role_id", String(roles[0].id));
      }
    }
  }, [roles, setValue]);

  const onSubmit = async (formValues) => {
    setSubmitError("");
    setSuccessMessage("");

    const payload = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      role_id: Number(formValues.role_id),
    };

    if (isStoreSelected) {
      payload.store = {
        name: formValues.store.name,
        phone: formValues.store.phone,
        tax_no: formValues.store.tax_no,
        bank_account: formValues.store.bank_account,
      };
    }

    try {
      await api.post("/signup", payload);

      setSuccessMessage(
        "You need to click link in email to activate your account!"
      );

      setTimeout(() => {
        history.goBack();
      }, 1200);
    } catch (error) {
      const apiMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Kayıt işlemi başarısız oldu. Aynı email/username ile tekrar kayıt denenmiş olabilir.";

      setSubmitError(apiMessage);
    }
  };

  return (
    <main className="bg-[#FAFAFA] px-4 py-10">
      <section className="mx-auto max-w-[600px] rounded-[8px] bg-white p-6 md:p-8">
        <h1 className="text-[32px] font-bold text-[#252B42]">Sign Up</h1>

        <p className="mt-2 text-[14px] text-[#737373]">
          Yeni kullanıcı oluşturmak için formu doldur.
        </p>

        {submitError ? (
          <div className="mt-4 rounded bg-red-50 px-4 py-3 text-sm text-red-600">
            {submitError}
          </div>
        ) : null}

        {successMessage ? (
          <div className="mt-4 rounded bg-yellow-50 px-4 py-3 text-sm text-yellow-700">
            {successMessage}
          </div>
        ) : null}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#252B42]">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded border border-[#E6E6E6] px-4 py-3 outline-none"
              {...register("name", {
                required: "Name zorunlu.",
                minLength: {
                  value: 3,
                  message: "Name en az 3 karakter olmalı.",
                },
              })}
            />
            {errors.name ? (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            ) : null}
          </div>

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
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
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
                pattern: {
                  value: PASSWORD_REGEX,
                  message:
                    "En az 8 karakter; sayı, küçük harf, büyük harf ve özel karakter içermeli.",
                },
              })}
            />
            {errors.password ? (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#252B42]">
              Password Validation
            </label>
            <input
              type="password"
              className="w-full rounded border border-[#E6E6E6] px-4 py-3 outline-none"
              {...register("passwordConfirm", {
                required: "Password tekrar zorunlu.",
                validate: (value) =>
                  value === passwordValue || "Şifreler eşleşmiyor.",
              })}
            />
            {errors.passwordConfirm ? (
              <p className="mt-1 text-sm text-red-500">
                {errors.passwordConfirm.message}
              </p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#252B42]">
              Role
            </label>
            <select
              className="w-full rounded border border-[#E6E6E6] px-4 py-3 outline-none"
              disabled={rolesLoading}
              {...register("role_id", {
                required: "Role seçimi zorunlu.",
              })}
            >
              <option value="">Select role</option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name || role.label || role.authority || `Role ${role.id}`}
                </option>
              ))}
            </select>
            {errors.role_id ? (
              <p className="mt-1 text-sm text-red-500">
                {errors.role_id.message}
              </p>
            ) : null}
          </div>

          {isStoreSelected ? (
            <div className="space-y-5 rounded border border-[#E6E6E6] p-4">
              <h2 className="text-lg font-bold text-[#252B42]">Store Info</h2>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#252B42]">
                  Store Name
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-[#E6E6E6] px-4 py-3 outline-none"
                  {...register("store.name", {
                    required: "Store Name zorunlu.",
                    minLength: {
                      value: 3,
                      message: "Store Name en az 3 karakter olmalı.",
                    },
                  })}
                />
                {errors.store?.name ? (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.store.name.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#252B42]">
                  Store Phone
                </label>
                <input
                  type="tel"
                  className="w-full rounded border border-[#E6E6E6] px-4 py-3 outline-none"
                  {...register("store.phone", {
                    required: "Store Phone zorunlu.",
                    pattern: {
                      value: TR_PHONE_REGEX,
                      message: "Geçerli bir Türkiye telefon numarası gir.",
                    },
                  })}
                />
                {errors.store?.phone ? (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.store.phone.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#252B42]">
                  Store Tax ID
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-[#E6E6E6] px-4 py-3 outline-none"
                  {...register("store.tax_no", {
                    required: "Store Tax ID zorunlu.",
                    pattern: {
                      value: TAX_NO_REGEX,
                      message: "Format TXXXXVXXXXXX olmalı.",
                    },
                  })}
                />
                {errors.store?.tax_no ? (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.store.tax_no.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#252B42]">
                  Store Bank Account
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-[#E6E6E6] px-4 py-3 outline-none"
                  {...register("store.bank_account", {
                    required: "Store Bank Account zorunlu.",
                    pattern: {
                      value: IBAN_REGEX,
                      message: "Geçerli bir TR IBAN gir.",
                    },
                  })}
                />
                {errors.store?.bank_account ? (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.store.bank_account.message}
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting || rolesLoading}
            className="inline-flex min-w-[160px] items-center justify-center rounded bg-[#23A6F0] px-6 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Submitting...
              </span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignupPage;