import 'swiper/css';
import 'swiper/css/pagination';
import ReviewCard from "./ReviewCard"
const Testimonials = () => {
  return (
    <div className="px-4 lg:px-12 my-32 bg-bgShade flex flex-col justify-center pb-12 " id='testimonials'>
        <div className="text-headingColor mb-20">
          <p className="text-xl font-semibold mb-5">Clients Feedback </p>
          <h2 className="text-4xl md:text-5xl font-bold">Customer Testimonials</h2>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-8' >
            <ReviewCard />
        </div>
    </div>
  )
}

export default Testimonials