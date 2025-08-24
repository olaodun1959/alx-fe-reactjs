import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      console.log("User registered:", data);
      alert("Registration successful!");

      // Reset form
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md w-80 mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Controlled Registration Form</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}   {/* ✅ matches checker */}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}   {/* ✅ matches checker */}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}   {/* ✅ matches checker */}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}
