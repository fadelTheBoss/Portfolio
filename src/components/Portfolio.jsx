import { useEffect, useState } from "react";
import {FaDribbble} from "react-icons/fa"
import arrowImage from "../assets/arrow.png";
import { projects } from "../constant/constant";
const Portfolio = () => {
  return (
    <div className="mx-4 lg:mx-12 my-32" id="portfolio">
      <div className="flex flex-col md:flex-row justify-between mb-20 gap-8 md:items-center">
        <div className="text-headingColor mb-20">
          <p className="text-xl font-semibold mb-5">Recent Project </p>
          <h2 className="text-4xl md:text-5xl font-bold">My Portfolio</h2>
        </div>

        <div className="">
            <button className="btn-primary bg-dribble py-5"> <FaDribbble className="w-6 h-6 inline-block mr-2" />visit  My Dribble</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="shadow-xl rounded-lg cursor-pointer "
            >
              <img
                src={project.image}
                className="hover:scale-90 transition-all duration-300"
              />
              <div className="py-8">
                <h3 className="text-2xl font-semibold mb-2 text-headingcolor ">
                  {project.name}
                </h3>
                <p className="text-body mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target=" _blank"
                  className="underline underline-offset-8 hover:text-primary hover:scale-90 "
                >
                  View In Dribble{" "}
                  <img src={arrowImage} className="w-3 inline-block ml-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
