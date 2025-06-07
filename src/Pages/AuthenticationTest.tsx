import { withAuth } from "../HOC";

function AuthenticationTest() {
  return <div>This page can be accessed by any loggedin user</div>;
}

export default withAuth(AuthenticationTest);
