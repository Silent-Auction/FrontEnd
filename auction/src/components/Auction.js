import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import NewAuction from "./AuctionEdit";

export default function AuctionList() {
  const [auction, setAuction] = React.useState([]);
  const [editAuction, setEditingAuction] = React.useState();

  const fetchAuction = () => {
    axiosWithAuth()
      .get("/auctions")
      .then(res => {
        console.log(res);
        setAuction(res.data);
      })
      .catch(err => console.log(err.response));
  };

  React.useEffect(() => {
    fetchAuction();
  }, []);

  const deleteAuction = id => {
    axiosWithAuth()
      .delete(`/auctions/${id}`)
      .then(res => {
        console.log(res);
        setAuction(res.data);
      })
      .catch(err => console.log(err.response));
  };

  const editAuction = friendObj => {
    setEditingAuction(friendObj);
  };

  return (
    <div>
      <NewAuction
        editAuction={editAuction}
        setAuction={setAuction}
        setEditingAuction={setEditingAuction}
      />
      {auction.map(friendObj => {
        return (
          <div key={friendObj.id}>
            {" "}
            <p className='name'>{friendObj.name}</p>
            <p className='age'>Age: {friendObj.age}</p>
            <p className='email'>Email: {friendObj.email}</p>
            <button onClick={() => editAuction(friendObj)}>Edit</button>{" "}
            <button onClick={() => deleteAuction(friendObj.id)}>Remove</button>{" "}
          </div>
        );
      })}
      <button onClick={fetchAuction}>Push me!</button>
    </div>
  );
}