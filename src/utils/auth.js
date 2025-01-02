export function verifySession() {
    if (!sessionStorage.getItem("jwtToken")) {
        return false;
    } else {
        return true;
    }
}