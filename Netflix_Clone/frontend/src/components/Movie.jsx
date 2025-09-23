import HeroBg from "../assets/spiderman2.png"

const Movie = () => {
  return (
    <div className="text-white relative">
        <img src={HeroBg} alt="bg-img" className="w-full rounded-2xl h-[480px] object-center object-cover"/>

        <div className="flex space-x-2 md:space-x-4 absolute bottom-3 left-4">
          <button>Watch Now</button>
          <button>Save for later</button>{/*bookmark button*/}
        </div>
    </div>
  )
}

export default Movie