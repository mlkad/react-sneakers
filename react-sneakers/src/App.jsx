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
            <div className="card__content">
              <img src="/assets/s1.jpg" alt="" />
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <div className="card__info">
                <div className="card__price">
                  <span>Price:</span>
                  <b>100$</b>
                </div>
                <img src="/assets/add.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card__content">
              <img src="/assets/s2.jpg" alt="" />
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <div className="card__info">
                <div className="card__price">
                  <span>Price:</span>
                  <b>100$</b>
                </div>
                <img src="/assets/add.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card__content">
              <img src="/assets/s3.jpg" alt="" />
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <div className="card__info">
                <div className="card__price">
                  <span>Price:</span>
                  <b>100$</b>
                </div>
                <img src="/assets/add.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card__content">
              <img src="/assets/s4.jpg" alt="" />
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <div className="card__info">
                <div className="card__price">
                  <span>Price:</span>
                  <b>100$</b>
                </div>
                <img src="/assets/add.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card__content">
              <img src="/assets/s5.jpg" alt="" />
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <div className="card__info">
                <div className="card__price">
                  <span>Price:</span>
                  <b>100$</b>
                </div>
                <img src="/assets/add.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card__content">
              <img src="/assets/s6.jpg" alt="" />
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <div className="card__info">
                <div className="card__price">
                  <span>Price:</span>
                  <b>100$</b>
                </div>
                <img src="/assets/add.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card__content">
              <img src="/assets/s7.jpg" alt="" />
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <div className="card__info">
                <div className="card__price">
                  <span>Price:</span>
                  <b>100$</b>
                </div>
                <img src="/assets/add.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__content">
              <img src="/assets/s8.jpg" alt="" />
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <div className="card__info">
                <div className="card__price">
                  <span>Price:</span>
                  <b>100$</b>
                </div>
                <img src="/assets/add.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__content">
              <img src="/assets/s9.jpg" alt="" />
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <div className="card__info">
                <div className="card__price">
                  <span>Price:</span>
                  <b>100$</b>
                </div>
                <img src="/assets/add.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__content">
              <img src="/assets/s10.jpg" alt="" />
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <div className="card__info">
                <div className="card__price">
                  <span>Price:</span>
                  <b>100$</b>
                </div>
                <img src="/assets/add.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__content">
              <img src="/assets/s2.jpg" alt="" />
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <div className="card__info">
                <div className="card__price">
                  <span>Price:</span>
                  <b>100$</b>
                </div>
                <img src="/assets/add.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__content">
              <img src="/assets/s1.jpg" alt="" />
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <div className="card__info">
                <div className="card__price">
                  <span>Price:</span>
                  <b>100$</b>
                </div>
                <img src="/assets/add.svg" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
