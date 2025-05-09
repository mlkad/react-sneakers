import { useState } from "react";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__left">
          <img width={40} height={40} src="/assets/logo.png" alt="" />
          <div className="header__info">
            <h3>React sneakers</h3>
            <p>The best sneaker store</p>
          </div>
        </div>

        <ul className="header__right">
          <li>
            <img src="/assets/cart.svg" alt="" />
            <span>40$ </span>
          </li>
          <li>
            <img src="/assets/wishlist.svg" alt="" />
            <span>Favorites</span>
          </li>
          <li>
            <img src="/assets/profile.svg" alt="" />
            <span>Profile</span>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>All trainers</h1>
      </div>
    </div>
  );
}

export default App;
