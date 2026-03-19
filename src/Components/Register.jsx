import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {user, setDataUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataUser({name,email});
    console.log(user);
  }

  return (
    <div className="container">
      <h1>Register</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}
