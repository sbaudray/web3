import { useAuth } from "./AuthContext";

export function AuthToggle() {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div
      style={{
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
      {isLoggedIn ? (
        <button onClick={logout} style={{ padding: ".5em" }}>
          Log Out
        </button>
      ) : (
        <button onClick={login} style={{ padding: ".5em" }}>
          Log In
        </button>
      )}
    </div>
  );
}
