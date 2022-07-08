import TokenService from "./token.service";

export default function authHeader() {
  const user = TokenService.getUser();

  if (user && user.accessToken) {
    // For Spring Boot back-end
    return { Authorization: `Bearer ${user.accessToken}` };

    // for Node.js Express back-end
    // return { "x-access-token": user.accessToken };
  }
  return {};
}
