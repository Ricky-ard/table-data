import React, { useEffect, useState, useRef } from "react";
import * as getData from "../services/getData";

export default function Home() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);

  const handleClickEvent = () => {
    const form = nameForm.current;
    setSearch(form["search"].value);
  };

  useEffect(() => {
    fetchData({
      limit: 10,
      page: page,
      q: search,
    });
  }, [search, page]);

  const fetchData = async (params) => {
    return await getData
      .get(params)
      .then((res) => {
        if (res.code === 200) {
          setData(res.data);
          setIsLoading(false);
        } else {
        }
        return res;
      })

      .catch((err) => {
        console.log(err);
        setIsLoading(true);
      });
  };

  let result;
  if (isLoading) {
    result = <div>loading</div>;
  } else {
    result = (
      <div className="container">
        <div className="w-full">
          <table className="mx-auto table-auto border-2">
            <thead>
              <tr>
                <th>Order id</th>
                <th>Customer</th>
                <th>Quantity per package</th>
                <th>Total item</th>
                <th>Order Date</th>
                <th>Statue</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((value) => {
                console.log(value);
                return (
                  <tr key={value.order_id}>
                    <td>{value.order_id}</td>
                    <td>{value.name}</td>
                    <td>{value.quantity}</td>
                    <td>{value.total_item}</td>
                    <td>{value.created_at}</td>
                    <td>{value.status}</td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return <>{result}</>;
}
