import React from "react";

const withAuth = (Component) => (props) => {
  const token = "123"
  return (props) => <Component {...props} token={token}/>;
}
export default withAuth;