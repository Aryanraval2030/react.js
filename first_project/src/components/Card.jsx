import './Card.css'


function Card() {



  const movie = [
    {
      id: 1,
      moviname: "Interstellar",
      img: "https://image.tmdb.org/t/p/w500/interstellar.jpg",
      rating: 8.6,
      updated: "20 Jan 2026",
      startTime: "18:30",
      duration: "2h 49m"
    },
    {
      id: 2,
      moviname: "Inception",
      img: "https://image.tmdb.org/t/p/w500/inception.jpg",
      rating: 8.8,
      updated: "18 Jan 2026",
      startTime: "21:00",
      duration: "2h 28m"
    }
  ]




  return (

    <div>
      <div className='moviecard'>
        <div className='img'>
          <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp" alt="" height='100%' width='100%' />
        </div>

        <div className='movietext'>
          <div>
            <span>{movie.moviname}</span>
            <span> rate</span>
          </div>

          <div>
            <span> update</span>
            <span> runnigtime</span>
          </div>

          <div>
            <span> time</span>
            <span> duration</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card
