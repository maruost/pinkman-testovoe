import React from "react";

function Api() {
  const checkStatus = (res) => {
    if (!res.ok) {
      console.log(res);
      return Promise.reject(res.status);
    } else {
      return res.json();
    }
  };

  const signin = (data) => {
    return fetch("http://pink-code.ru:20085/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    }).then((res) => checkStatus(res));
  };

  const getEvents = () => {
    return fetch("http://pink-code.ru:20085/list", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => checkStatus(res));
  };

  return { signin, getEvents };
}

export default Api;
