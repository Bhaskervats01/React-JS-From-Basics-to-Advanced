import { Link } from "react-router";

export default function RestCard({ restInfo }) {

  return (
    <Link to={"/city/delhi/"+restInfo?.info?.id}>


    <div className="max-w-70 mb-2 transform transition duration-200 hover:scale-95">
      <img
        className="w-70 h-45 object-cover rounded-xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          restInfo?.info?.cloudinaryImageId }/>

      <div className="w-[95%] mx-auto mt-3">
        <div className="font-bold text-xl">{restInfo?.info?.name}</div>

        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <circle cx="12" cy="12" r="12" fill="#267E3E" />

              <path
                d="M12 4L14.3 9L19.8 9.6L15.8 13.3L16.9 18.7L12 16L7.1 18.7L8.2 13.3L4.2 9.6L9.7 9L12 4Z"
                fill="white"/>
            </svg>

            <span className="text-lg font-semibold">
              {restInfo?.info?.avgRating}
            </span>
          </div>

          <span className="text-lg font-semibold">•</span>

          <span className="text-lg font-semibold">
            {restInfo?.info?.sla?.slaString}
          </span>
        </div>
        <div className="text-gray-600 text-xl mt-1 h-7 overflow-hidden">{restInfo?.info?.cuisines.join(",")}</div>
      </div>
    </div>
    </Link>
  );
}
