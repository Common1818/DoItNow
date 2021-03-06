import React, { useContext } from "react";
import Card from "./learningCards/Card";
import Footer from "../layout/Footer/Footer";

import { SpecialityContext } from "../../contexts/specialityContext";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

import Preloader from "./learningCards/Preloader/preloader";

const Learn = () => {
  const { specialities } = useContext(SpecialityContext);
  const LearnCards = specialities && specialities.specialities;

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
    <Helmet>
        <title>Do It Now</title>
        <meta name="description" content="Learn all the skills necessary for freelancing in webDevelopment" />
        <meta name="robots" content="index follow" />
      </Helmet>
      {LearnCards ? (
        <div>
          <div className="container learn-container">
            <div className="flex">
              <Card learningCards={LearnCards} />
            </div>
            <div className="clear-flex"></div>
            <div className="mb-3 ml-3 mr-3">
              <div className="text-center">
                <NavLink to="/addcard" rel="nofollow">
                  <Button>Add Card</Button>
                </NavLink>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Preloader />
      )}
    </motion.div>
  );
};

export default Learn;
