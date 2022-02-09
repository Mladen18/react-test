import React, { useEffect, useState } from "react";
import { User } from "../../interface/User";
import logCompName from "../../helper/logCompName";

const UserBlock: React.FC<{ users: User[] | null; message: string; id: number }> = ({ users, message, id }) => {
  const [loadUser, setLoadedUser] = useState<User>();

  // Log message props
  const componentName: string = "User Block";
  useEffect(() => {
    logCompName(message, componentName);
  }, [message]);

  // Find user by id
  useEffect(() => {
    if (users !== null && id != null) {
      const user = users.find((item: User) => item.id === id);
      setLoadedUser(user);
    }
  }, [users, id]);

  return (
    <div className="e-user">
      <h1>User name: {loadUser?.name}</h1>
    </div>
  );
};

export default UserBlock;
