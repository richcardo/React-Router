import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router";
export default function Login() {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setDataUser } = useContext(UserContext);
  const submit = (data) => {
    setDataUser(data);
    Navigate("/");
  };
  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-gray-900">Login</h1>
      <div className="card">
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              placeholder="Username"
              {...register("userName", {
                required: "UserName is required",
                maxLength: 50,
              })}
            />
            {errors.userName && (
              <p className="text-red-500">{errors.userName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                maxLength: 50,
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}
