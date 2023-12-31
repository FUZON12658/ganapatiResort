import React from 'react'
import meetingsHero from "../../Images/meetings/meetings1.jpg"
import eventsHero from "../../Images/events/gallery.jpg"

const MeetingsAndEvents = () => {
  return (
    <div class="container my-24 mx-auto md:px-6 sm:mt-56">
      <section class="mb-32">
        <h1 className="text-center text-4xl font-bold mb-2">Meetings</h1>
        <img src={meetingsHero}
          class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
    
        <div class="mb-6 flex items-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (23).jpg" class="mr-2 h-8 rounded-full" alt="avatar"
            loading="lazy" />
          <div>
            <span> Published <u>01.01.2024</u> by </span>
            <a href="#!" class="font-medium">Fuzon Corp</a>
          </div>
        </div>
    
        <h1 class="mb-6 text-3xl font-bold">
          A place where you can engineer great plans and make great decisions
        </h1>
    
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          harum tempore cupiditate asperiores provident, itaque, quo ex iusto
          rerum voluptatum delectus corporis quisquam maxime a ipsam nisi
          sapiente qui optio! Dignissimos harum quod culpa officiis suscipit
          soluta labore! Expedita quas, nesciunt similique autem, sunt,
          doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
          Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex
          ducimus consequatur corporis, architecto nesciunt vitae ipsum
          consequuntur perspiciatis nulla esse voluptatem quos dolorum delectus
          similique eum vero in est velit quasi pariatur blanditiis incidunt
          quam.
        </p>
      </section>

      <section class="mb-32">
      <h1 className="text-center text-4xl font-bold mb-2">Events</h1>
        <img src={eventsHero}
          class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
    
        <div class="mb-6 flex items-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (23).jpg" class="mr-2 h-8 rounded-full" alt="avatar"
            loading="lazy" />
          <div>
            <span> Published <u>01.01.2024</u> by </span>
            <a href="#!" class="font-medium">Fuzon Corp</a>
          </div>
        </div>
    
        <h1 class="mb-6 text-3xl font-bold">
          Celebrate your milestones in the best possible way with Us!
        </h1>
    
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          harum tempore cupiditate asperiores provident, itaque, quo ex iusto
          rerum voluptatum delectus corporis quisquam maxime a ipsam nisi
          sapiente qui optio! Dignissimos harum quod culpa officiis suscipit
          soluta labore! Expedita quas, nesciunt similique autem, sunt,
          doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
          Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex
          ducimus consequatur corporis, architecto nesciunt vitae ipsum
          consequuntur perspiciatis nulla esse voluptatem quos dolorum delectus
          similique eum vero in est velit quasi pariatur blanditiis incidunt
          quam.
        </p>
      </section>
    </div>
  )
}

export default MeetingsAndEvents
