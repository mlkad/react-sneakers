import { useState } from "react";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__left">
          <img width={50} height={50} src="/assets/logo.png" alt="" />
          <div className="header__info">
            <h3>REACT SNEAKERS</h3>
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
        <div className="cards">
          <div className="card">
            <img src="/assets/image 5.jpg" alt="" />
            <p>Men's Nike Blazer Mid Suede Sneakers</p>
            <div>
              <div className="price">
                <span>Price:</span>
                <b>100$</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
