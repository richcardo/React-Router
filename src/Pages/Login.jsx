export default function Login() {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-gray-900">Login</h1>
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
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}
