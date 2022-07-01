import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <div className="w-full  mx-auto ">
        <table className="table-fixed border-2">
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
            <tr>
              <td>id</td>
              <td>nama</td>
              <td>quantity</td>
              <td>total</td>
              <td>order date</td>
              <td>status</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
