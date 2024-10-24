
/**
 * Logic holder to know if client is currently authenticated
 */
export function isAuthenticated() {
  const token = localStorage.getItem("userToken");
  if (token === null) {
    return false;
  }
  const tokenExpirationDate = Number(localStorage.getItem("userTokenExpiration"));
  const now = new Date().getTime();
  return now < tokenExpirationDate;
}

