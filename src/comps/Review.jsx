import React from "react";
import classes from "../css-modules/Review.module.scss";
import Heading from "../UI/Heading";

const Review = () => {
  const data = [
    {
      image: "/reviews/1.png",
    },
    {
      image: "/reviews/2.png",
    },
    {
      image: "/reviews/3.png",
    },
    {
      image: "/reviews/4.png",
    },
    {
      image: "/reviews/5.png",
    },
    {
      image: "/reviews/6.png",
    },
    {
      image: "/reviews/7.png",
    },
  ];

  return (
    <div className={classes.container}>
      {Heading("Отзывы")}
      <div className={classes.block}>
        <div className={classes.slider}>
          <div className={classes.row}>
            {data.map((item, index) => (
              <div className={classes.item} key={index}>
                <img src={item.image} alt="Review" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
