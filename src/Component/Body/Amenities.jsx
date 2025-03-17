import Slider from "react-slick";

const Amenities = () => {
 
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  };

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
         
          <div className="flex flex-col gap-3 shadow-lg rounded-lg p-3 w-full lg:w-1/4 xl:w-1/5">
            <h3 className="font-bold text-lg sm:text-xl">Facilities</h3>
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="bg-[#D9D9D9] w-full h-8 sm:h-10 rounded"
              ></div>
            ))}
          </div>

        
          <div className="w-full lg:w-3/4 xl:w-4/5 shadow-lg rounded-lg overflow-hidden">
            <Slider
              {...settings}
              className="h-48 sm:h-64 md:h-72 lg:h-80 w-full text-center"
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="px-2">
                  <div className="bg-gray-100 h-full rounded-lg flex items-center justify-center">
                    <div className="text-center text-xl">{item}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="w-full mt-6 sm:mt-8 lg:mt-12">
          <h3 className="font-bold text-lg sm:text-xl mb-4">Library</h3>
          <div className="space-y-4 text-sm sm:text-base">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It
              has roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;