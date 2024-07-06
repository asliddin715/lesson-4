import React, { useState, useEffect } from "react";

const Bathroom = () => {
  const [bathroom, setbathroom] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchbathroom() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/bathroom`,
          {
            signal,
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const productData = await response.json();
        if (!signal.aborted) {
          setbathroom(productData);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch Aborted");
        } else {
          setError(error.message);
          console.log(error.message);
        }
      }
    }

    fetchbathroom();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="">
      {error && <p>Error: {error}</p>}
      <ul
        className="project-childs"
        style={{ display: "flex", marginTop: "40px" }}
      >
        {bathroom.map((item) => (
          <li
            className="children"
            key={item.id}
            style={{ width: "580px", marginBottom: "30px" }}
          >
            <img
              style={{
                marginBottom: "30px",
                width: "580px",
                height: "300px",
                objectFit: "cover",
              }}
              src={item.image}
              alt={item.name}
            />
            <div className="mini">
              <div>
                <p style={{ fontSize: "25px", marginBottom: "10px" }}>
                  {item.name}
                </p>
                <p style={{ fontSize: "22px", margin: 0 }}>${item.price}</p>
              </div>
              <img
                style={{ width: "60px", height: "60px" }}
                src="/arroy.png"
                alt="loading"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bathroom;
