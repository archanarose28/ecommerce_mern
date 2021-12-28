import React, { Component } from "react";
import Navbar from "./Components/Header";
import Card from "./Components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import ProductDetails from "./Screens/ProductDetails";

const ERoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="details/:id" element={<ProductDetails />} />
    </Routes>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <ERoutes />
    </div>
  );
};

export default App;

// export default class App extends Component {
//   state = {
//     productArr: [
//       {
//         name: "puma",
//         price: 1200,
//       },
//       {
//         name: "nike",
//         price: 1233,
//       },
//       {
//         name: "fila",
//         price: 1200,
//       },
//     ],

//     product: [0, 0, 0],
//   };

//   render() {
//     return (
//       <div>
//         <Navbar />

//         {this.state.product.map((item) => {
//           return (
//             <div>
//               {" "}
//               <Card detailes={item} />{" "}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
