import React from "react";
import { Link } from "react-router-dom";
import Nav from "../modules/Nav";

const Navigation: React.FC<{ navs: Nav[] }> = ({ navs }) => {
  return (
    <div className="nav">
      {navs.map((nav, intex) => {
        return (
          <Link key={intex} to={nav.url}>
            {nav.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
