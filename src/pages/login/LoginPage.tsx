import { FormEvent } from "react";
import { useLogin } from "./hooks/useLogin";
import { useAuth } from "@/services/auth";

export function LoginPage() {
  const login = useAuth((state) => state.login);

  const { formData, isValid, changeHandler } = useLogin();

  function doLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
    login(formData.username, formData.password);
  }

  return (
    <div className="page-sm">
      <h1 className="title">LOGIN</h1>

      <form onSubmit={doLogin} className=" flex flex-col gap-3">
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
        />
        <button className="btn primary" type="submit" disabled={!isValid}>
          SIGN IN
        </button>
      </form>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}
