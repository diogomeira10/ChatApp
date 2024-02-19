import { useNavigate } from "react-router-dom";

export function Login({ user, setUser,list }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(user === "") {
      return 
    }
    // Redirect to the chat page
    navigate("/chat");
  };

  return (
    <div className="bg-slate-500 text-slate-900 h-screen flex items-center justify-center">
      <div className="border rounded border-white w-1/4 h-2/4 bg-slate-400">
        <div className="text-center">
          <h1 className="mt-12 mb-12 text-5xl font-bold">Login</h1>
          <form
            className="flex flex-col gap-2 items-center"
            onSubmit={handleSubmit}
          >
            <label className="font-bold">Username</label>
            <input
              onChange={handleChange}
              value={user}
              className="rounded mt-10 pl-1 w-1/4"
              placeholder="Enter username"
              type="text"
            />
            <button type="submit" className="bg-slate-900 mt-4 text-white rounded p-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
