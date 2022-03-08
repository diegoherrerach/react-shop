import React from 'react';
import '../styles/notfound.scss'

const NotFound = () => {
  return (
    <div className="notf">
    <div className="number">404</div>
    <div className="text"><span>Ooops...</span>page not found</div>
    <a className="me" href="https://codepen.io/uzcho_/pens/popular/?grid_type=list" target="_blank"></a>
    </div>
  );
}

export default NotFound;