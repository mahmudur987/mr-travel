// components/AwardsSlider.tsx
import React from "react";
import Slider from "react-slick";
const AwardsSlider: React.FC = () => {
  const awards = [
    {
      id: 1,
      title: "Best Innovation Award",
      imageSrc:
        "https://media.istockphoto.com/id/1400932923/photo/crystal-star-shape-trophy-against-blue-background.jpg?s=612x612&w=is&k=20&c=_p7pOLs41lPYfAS5F1glIXY0W5ghi4lhmw5TQhZlAhg=",
    },
    {
      id: 2,
      title: "Excellence in Customer Service",
      imageSrc:
        "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
    },
    {
      id: 3,
      title: "Top Performer of the Year",
      imageSrc:
        "https://media.istockphoto.com/id/978978230/vector/award-ribbon-icon-on-white-stock-vector-illustration.jpg?s=612x612&w=0&k=20&c=rHzU2X-6DBTR2zB-yu4oXKQ1f1uEW6aEEM-_RT4pZSA=",
    },
    {
      id: 4,
      title: "Outstanding Teamwork Award",
      imageSrc:
        "https://cdn3.iconfinder.com/data/icons/business-management-flat/64/solar-panel-clean-energy-green-electric-512.png",
    },
    {
      id: 5,
      title: "Leadership Excellence Award",
      imageSrc:
        "https://static.vecteezy.com/system/resources/previews/000/221/563/original/vector-leader-trophy-icon.jpg",
    },
    {
      id: 6,
      title: "Innovation Champion Award",
      imageSrc:
        "https://previews.123rf.com/images/pxlprostudio/pxlprostudio1904/pxlprostudio190400310/120280199-awards-icon-on-background-for-graphic-and-web-design-simple-vector-sign-internet-concept-symbol.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Awards</h2>
      <Slider {...settings}>
        {awards.map((award) => (
          <div key={award.id} className="text-center">
            <img
              src={award.imageSrc}
              alt={award.title}
              className="mx-auto rounded-lg max-w-md h-52 mb-2"
            />
            <h3 className="text-lg font-semibold">{award.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AwardsSlider;
