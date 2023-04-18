import React, { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import './LeftNav.css'

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h3>All Category</h3>
      <div className="p-3">
        {categories.map((category) => (
          <p key={category.id}>
            <NavLink to={`/category/${category.id}`}  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {category.name}
            </NavLink>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
