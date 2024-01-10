import { Link } from "react-router-dom"
import heroImage from "../../Images/resortLogo.png"
import ImgLazyLoader from "../../MasterComponents/ImgLazyLoader"

export default () => {
  return (
    <div className="bg-gray-900">
    <div className="container py-24 mx-auto md:px-6">
      <section className="">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
            <ImgLazyLoader img={heroImage} cName="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10] bg-white"/>
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-orange-500 p-6 text-center text-white lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-6 text-3xl" style={{fontFamily:"Lobster"}}>
                  What are you waiting for?
                </h2>
                <p className="mb-6 pb-2 lg:pb-0">
                Discover serenity at Ganpati Resort - your ultimate escape from the chaos of everyday life. Immerse yourself in nature's embrace and experience tranquility like never before. Join us for a day of relaxation, adventure, and bliss. 
                </p>
                <Link to="tel:+9779802020346">
                <button type="button"
                  className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-30 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-black-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init data-te-ripple-color="light">
                  Call Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}