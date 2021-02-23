import React from 'react';
import ReactDOM from 'react-dom';
const Menu = ({firstElement, secondElement, thirdElement, link}) => (
  <nav>
    <ul>
      <li>{firstElement}</li>
      <li>{secondElement}</li>
      <li>
        <a href={link}>{thirdElement}</a>
      </li>
    </ul>
  </nav>
);
ReactDOM.render (
  <Menu
    firstElement="Перший елемент списку"
    secondElement="Другий елемент списку"
    thirdElement="Google"
    link="https://www.google.com.ua/"
  />,
  document.getElementById("root")
);