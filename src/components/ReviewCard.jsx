import { reviews } from "./constant";

const ReviewCard = () => {
  return (
    <>
      
        {reviews.map((review) => (
          <div 
            key={review.id}
            className="border-2 border-b-[#006B6A] p-8 rounded-md "
          >
            <div>
              <img src="/src/assets/starts.png" alt="" className="h-4" />
              <p className="my-5">{review.comment}</p>
              <div className="flex gap-4 items-center">
                <img
                  src={review.photo}
                  alt=""
                  className="h-14 w-14 rounded-[50%]"
                />
                <div>
                  <p>{review.name}</p>
                  <p className=" mt-1 py-1 text-sm bg-[#006B6A] text-white text-center px-1 rounded-md ">
                    {review.job}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
     
    </>
  );
};

export default ReviewCard;
