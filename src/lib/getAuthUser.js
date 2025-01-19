import { cookies } from "next/headers";
import { decrypt } from "./sessions";

export default async function getAuthUser() {
  const storeCookies = cookies();
  const session = await storeCookies.get("session")?.value;

  if (session) {
    const user = await decrypt(session);
    return user;
  }
}
