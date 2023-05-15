import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;

    const booking = {
      customerName: name,
      email,
      img,
      date,
      service_id: _id,
      service: title,
      price,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Book Services Successfully!");
        }
      });
  };
  return (
    <div className="card-body">
      <h2 className="text-2xl text-center">Book Service: {title}</h2>
      <form onSubmit={handleBookService}>
        <div
          className="grid md:grid-cols-2 gap
        6"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="name"
              defaultValue={user?.name}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="mm/dd/yyyy"
              name="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              name="amount"
              placeholder="amount"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6 space-y-4">
          <input
            type="submit"
            value="Order Confirm"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;
