import React from "react";

type returnProps = {
  children: JSX.Element;
};

function fetchAPI() {
  return fetch("http://localhost:9000/weather")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function Body(props: returnProps) {
  return <div>{props.children}</div>;
}

function weatherDisplay() {
  return (
    <div>
      <Body>
        <>
          <h1>The temperature is: </h1>
          {fetchAPI()}
        </>
      </Body>
    </div>
  );
}

export default weatherDisplay;
