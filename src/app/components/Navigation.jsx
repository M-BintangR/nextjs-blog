import getAuthUser from "@/lib/getAuthUser";
import NavLink from "./NavLink";

export default async function Navigation() {
  const authUser = getAuthUser();

  return (
    <nav>
      <NavLink label="Home" href="/" />
      <div>
        {authUser ? (
          <div className="flex items-center">
            <NavLink label="Dashboard" href="/dashboard" />
          </div>
        ) : (
          <div>
            <NavLink label="Login" href="/login" />
            <NavLink label="Register" href="/register" />
          </div>
        )}
      </div>
    </nav>
  );
}
