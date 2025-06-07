import { withAdminAuth } from "../HOC";

function AuthenticationTestAdmin() {
  return (
    <div>
      This page can only be accessed if the role of the loggedin user is ADMIN
    </div>
  );
}

export default withAdminAuth(AuthenticationTestAdmin);
