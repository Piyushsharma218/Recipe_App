import React, { useDebugValue } from "react";
import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";
import Slider from "react-slick";
import { Clock, Loader } from "lucide-react";

const TrendingRecipe = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  console.log("my meal daata", data?.meals);
  const meal = data?.meals || [];

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Loading {title}...
      </div>
    );

  return (
    <>
      <section className="mt-2 mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-100 tracking-tight border-1-4 border-yellow-400 pl-4 flex items-center">
          <Clock className="w-6 h-6 mr-3 text-blue-500" />
          {title}
        </h2>

        <div className="w-full mx-auto ">
          <Slider {...settings}>
            {meal.map((meal) => (
              <div key={meal.idMeal} className="px-10 flex justify-center">
                <div className="relative bg-gray-900 rounded-xl shadow-xl  transform transition duration-500 cursor-pointer border group border-gray-800 hover:shadow-blue-600/50 mb-5">
                  {/* hover glow */}
                  <div className="absolute inset-0 rounded-xl border-r border-transparent group-hover:border-blue-500 transition duration-500"></div>

                  <div className="flex justify-center items-center p-5">
                    <img
                      src={meal.strMealThumb}
                      alt=""
                      className="h-30 w-30 rounded-xl border border-yellow-400 transition duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default TrendingRecipe;
