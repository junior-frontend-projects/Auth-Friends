import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="secretpage">
      <h1>The Secret List</h1>
      <h3>
        You can also scroll down and add new friends to this list, enjoy!
      </h3>

      <br />
      <hr />

      <h1>List of Friends</h1>

      <div className="friends">
        {friends.map(x => {
          return (
            <div id={x.id} className="friend">
              <h1>{x.name}</h1>
              <h2>{x.age}</h2>
              <p>{x.email}</p>
            </div>
          );
        })}
      </div>

      <hr />

      <AddFriend setFriends={setFriends} />
    </div>
  );
};

export default Friends;