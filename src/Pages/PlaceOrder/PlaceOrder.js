import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlaceOrder = () => {
  const { id } = useParams();
  const [pack, setPack] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/packages/${id}`).then((res) => {
      console.log(res.data);
    });
  }, [id]);

  return (
    <div>
      <h1>This is place order</h1>
    </div>
  );
};

export default PlaceOrder;
