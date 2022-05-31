import React, { useState, useEffect } from "react";
import axios from "axios";

function Countries() {
  const [country, setCountry] = useState([]);
  const [resultFiltered, setresultFiltered] = useState("");
  const [term, setTerm] = useState("");

  useEffect(() => {
    const getResult = async () => {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setCountry(data);
      setresultFiltered(data);
    };

    getResult();
  }, []);

  const insertCountries = () => {
    const filtered = country.filter((country) =>
      country.name.common.toLowerCase().includes(term.toLowerCase())
    );

    return filtered.map((country) => {
      return (
        <React.Fragment key={country.name.common}>
          <p>{country.name.common}</p>
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </div>
      <ul>{insertCountries()}</ul>
    </div>
  );
}
export default Countries;

//   const [country, setcCountry] = useState([]);

//   useEffect(() => {
//     const search = async () => {
//       const { data } = await axios.get("https://restcountries.com/v3.1/all");
//       setcCountry(data);
//     };
//     search();
//   }, []);
//   return (
//     <div>
//       <p>{country.name.common}</p>
//     </div>
//   );
// }
