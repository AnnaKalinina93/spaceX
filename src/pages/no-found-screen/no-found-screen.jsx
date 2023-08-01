import { Link } from 'react-router-dom';
import React from 'react'

function NotFoundScreen() {
  return (
    <div className="container"> 
      <h1>404. Page not found</h1>
      <p>
        <Link className="link" to="/">Вернуться на главную</Link>
      </p>
    </div>

  );
}
export default NotFoundScreen;