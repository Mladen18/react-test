import React, { useEffect, useState } from "react";
import { User } from "../../interface/User";

const UserBlock: React.FC<User> = (props) => {
  const [loadUser, setLoadedUser] = useState<User>();

  useEffect(() => {
    if (props.users !== null && props.id != null) {
      setLoadedUser(props.users.find((item: User) => item.id === +props.id));
    }
  }, [props.users, props.id]);

  return (
    <div className="e-user">
      <h1>User name: {loadUser?.name}</h1>
    </div>
  );
};

export default UserBlock;
