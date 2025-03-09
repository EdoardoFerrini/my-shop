import { ChangeEvent, FormEvent, useState } from "react";

export function LoginPage() {
  const [formData, setFormData] = useState({
    username: "hello@fabiobiondi.io",
    password: "Fabio12345",
  });

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    setFormData((s) => ({ ...s, [name]: value }));
  }

  async function doLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
  }

  const isValid = formData.username.length && formData.password.length;

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
