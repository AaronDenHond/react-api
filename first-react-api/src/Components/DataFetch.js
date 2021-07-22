import { React, useState, useEffect } from "react";
import axios from "axios";

export default function DataFetch() {
  const [posts, Setposts] = useState([]); //state variable,initialize posts to empty array.

  //useEffect hook for fetch

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        //get request returns a promise
        console.log(res);
      })
      //catch errors if necessary
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li></li>
        ))}
      </ul>
    </div>
  );
}
