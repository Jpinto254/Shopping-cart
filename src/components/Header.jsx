import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";

export default function Header() {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <a href="/">Chantilly Disfruta el sabor</a>
        </Navbar.Brand>

        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="sucess">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge> {cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.map((prod) => (
                <span className="cartitem" key={prod.id}>
                  <img
                    src={prod.image}
                    className="cartItemImg"
                    alt={prod.name}
                  />
                  <div className="cartItemDetail">
                    <span>{prod.name}</span>
                    <span>${prod.price}</span>
                  </div>
                  <AiFillDelete
                    fontSize="20px"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  />
                </span>
              ))}
              <span style={{ padding: 10 }}>Cart is empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
