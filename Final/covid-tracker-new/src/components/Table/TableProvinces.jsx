import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { fetchProvinces } from "../../api/";

const TableProvinces = () => {
  const [fetchedProvinces, setFetchedProvinces] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedProvinces(await fetchProvinces());
    };
    fetchApi();
  }, [setFetchedProvinces]);

  console.log(fetchedProvinces);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Meninggal</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>test1</td>
            <td>test1</td>
            <td>test1</td>
            <td>test1</td>
          </tr> */}
          {fetchedProvinces.map((province) => (
            <tr key={province.name}>
              <td>{province.name}</td>
              <td>{province.confirmed}</td>
              <td>{province.recovered}</td>
              <td>{province.deaths}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableProvinces;
