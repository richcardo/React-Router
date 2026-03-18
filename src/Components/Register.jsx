export default function Register() {
  return (
    <div className="container">
      <h1>Register</h1>
      <div className="card">
        <form>
          <div>
            <label htmlFor="Username">Username</label>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <label htmlFor="password">Confirm password</label>
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}
