import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Navigate = useNavigate();

  const { setDataUser } = useContext(UserContext);

  const submit = (data) => {
    setDataUser(data);
    Navigate("/");
  };

  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-gray-900">Register</h1>
      <div className="card">
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              placeholder="Username"
              {...register("userName", { required: "UserName is required", maxLength:50})}
            />
            {errors.userName && (
              <p className="text-red-500">{errors.userName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: "Email is required",maxLength:50 })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
}
