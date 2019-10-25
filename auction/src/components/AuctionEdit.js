import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function NewAuction(props) {
  const [form, setForm] = React.useState({ name: "", starting_price: "", date_starting: "", date_ending: "", description: "", image: ("") });

console.log(props);

  React.useEffect(() => {
    if (props.editAuction) {
      setForm({
        name: props.editAuction.name,
        starting_price: props.editAuction.starting_price,
        date_starting: props.editAuction.date_starting,
        date_ending: props.editAuction.date_ending,
        description: props.editAuction.description,
        image: props.editAuction.image,
      });
    } else {
      setForm({ name: "", starting_price: "", date_starting: "" });
    }
  }, [props.editAuction]);

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();

    if (props.editAuction) {
      axiosWithAuth()
        .put(`/auctions/${props.editAuction.id}`, form)
        .then(res => {
          console.log("EDIT", res);
          props.setAuction(res.data);
          setForm({ name: "", starting_price: "", date_starting: "", date_ending: "", description: "", image: "" });
          props.editAuction(null);
        });
    } else {
      axiosWithAuth()
        .post("/auctions", form)
        .then(res => {
          console.log("POST", res);
          props.setAuction([...props.auction, res.data]);
          setForm({ name: "", starting_price: "", date_starting: "", date_ending: "", description: "", image: "" });
        })
        .catch(err => console.log(err));
    }
  };

  const closeEdit = e => {
    e.preventDefault();
    props.editAuction2(null);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        Name: <input
          required
          type="text"
          name="name"
          value={form.name}
          onChange={handleChanges}
        />
        Starting Bid:
        <input
          required
          type="number"
          name="starting_price"
          value={form.starting_price}
          onChange={handleChanges}
        />
        Auction Start Date:
        <input
          required
          type="date"
          name="date_starting"
          value={form.date_starting}
          onChange={handleChanges}
        />
        Auction End Date:
        <input
          required
          type="date"
          name="date_ending"
          value={form.date_ending}
          onChange={handleChanges}
        />
        Description:
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChanges}
        />
        Image:
        <input
          required
          type="string"
          name="image"
          value={form.image}
          onChange={handleChanges}
        />
        <button type="submit">
          {props.editAuction ? "Apply Changes" : "New Auction"}
        </button>
        <button onClick={closeEdit}>Cancel</button>
      </form>
    </div>
  );
}