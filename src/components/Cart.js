import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Swal from "sweetalert2";
import { clearCart, deleteCart } from "../slice/CartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  // Calculate total price
  const totalPrice = cart.reduce((acc, info) => {
    acc += info.price * info.quantity;
    return acc;
  }, 0);

  const handleClearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        Swal.fire("Cleared!", "Your cart has been cleared.", "success");
      }
    });
  };

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCart(item));
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };

  const handleSubmit = () => {
    Swal.fire({
      title: "Submitted!",
      text: "Your cart has been submitted successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="py-5 mt-5 text-center text-light">WELCOME TO CART</h1>

        <Button className="mb-2 bt" variant="success" onClick={handleClearCart}>
          CLEAR ALL
        </Button>
        <Button
          className="mb-2 ms-5 btp"
          variant="success"
          onClick={() => setShowTotalPrice(!showTotalPrice)}
        >
          {showTotalPrice ? "Hide Total Price" : "Show Total Price"}
        </Button>

        {showTotalPrice && (
          <div className="mb-2 mt-2">
            <h3 className="tp">Total Price: {totalPrice.toFixed(2)} $</h3>
          </div>
        )}

        <Table striped bordered hover size="sm" className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>IMAGE</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((info) => (
              <tr key={info.id}>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>
                  <img
                    src={info.image}
                    alt={info.name}
                    style={{ width: "70px", height: "50px" }}
                  />
                </td>
                <td>{info.quantity}</td>
                <td>{(info.price * info.quantity).toFixed(2)} $</td>

                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteItem(info)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="d-flex justify-content-center">
          <Button
            className="mt-3 mb-3"
            variant="success"
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </>
  );
}
