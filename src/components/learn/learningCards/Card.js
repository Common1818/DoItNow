import React, { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../../contexts/authContext";

import DeleteButton from "../../layout/Button/DeleteButton";
import SomeButton from "../../layout/Button/button";

import $ from "jquery";
import "./css/card2.css";

const Card = (props) => {
  useEffect(() => {
    if (window.innerWidth <= 600) {
      $(".container .card .contentBx").css("height", "150px");
    }
  });

  const { learningCards } = props;
  const { isAdmin, authState } = useContext(AuthContext);
  const uid = authState && authState.uid;
  return (
    <div className="learn-container">
      <div className="container pt-4">
        <div className="row">
          {learningCards &&
            learningCards.map((item) => {
              return (
                <div key={item.id} className="col-lg-6">
                  <div className="card">
                    <div className="imgBx">
                      <img
                        className="image"
                        src={item.imageUrl}
                        alt={item.alt}
                      />
                    </div>
                    <div className="contentBx">
                      <h2> {item.Name}</h2>
                      {isAdmin ? (
                        <Row>
                          <Col>
                            <NavLink
                              to={"/updatespeciality/" + item.id}
                              rel="nofollow">

                              <img
                                src="https://www.svgrepo.com/show/241804/edit.svg"
                                style={{ width: "20px" }}
                                alt={"edit" + item.Name}
                              />

                            </NavLink>
                            <DeleteButton
                              collectionName="Specialities"
                              DocId={item.id}
                              size="small"/>
                              
                          </Col>
                        </Row>
                      ) : null}
                      {uid ? (
                        <a href={"/learn/" + item.Name} rel="follow">
                          <SomeButton buttonText={"Start Now"} />
                        </a>
                      ) : (
                        <NavLink to={"/learn/" + item.Name}>
                          <SomeButton buttonText={"Login to Start"} />
                        </NavLink>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Card;
