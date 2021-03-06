import React from "react";
import "./UserItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";
export default function UserItem({ id, image, name, placeCount }) {
  return (
    <div>
      <li className="user-item">
        <div className="user-item__content">
          <div>
            <Link to={`/${id}/places`}>
              <div className="user-item__image">
                <Avatar image={image} alt={name} />
              </div>
              <div className="user-item__info">
                <h2>{name}</h2>
                <h3>
                  {placeCount} {placeCount === 1 ? "Place" : "Places"}
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </li>
    </div>
  );
}
