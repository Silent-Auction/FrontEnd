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

  const editAuction2 = friendObj => {
    setEditingAuction(friendObj);
  };

  return (
    <div>
      <NewAuction
      auction={auction}
        editAuction={editAuction}
        setAuction={setAuction}
        setEditingAuction={setEditingAuction}
      />
      {auction.map(friendObj => {
        return (
          <div key={friendObj.id}>
            {" "}
            <p className='name'>Name: {friendObj.name}</p>
            <p className='starting_price'>Starting Bid: ${friendObj.starting_price}</p>
            <p className='date_starting'>Start Date: {friendObj.date_starting}</p>
            <p className='date_ending'>End Date: {friendObj.date_ending}</p>
            <p className='description'>Item Description: {friendObj.description}</p>
            <p className='image'>Image: {friendObj.image}</p>
            <button onClick={() => editAuction2(friendObj)}>Edit</button>{" "}
            <button onClick={() => deleteAuction(friendObj.id)}>Remove</button>{" "}
          </div>
        );
      })}
      <button onClick={fetchAuction}>Push me!</button>
    </div>
  );
}