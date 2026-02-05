import './Card.css'


function Card() {



const movie = [
  {
    id: 1,
    moviname: "Interstellar",
    img: "https://resizing.flixster.com/7c3qnZfPzZgID7Ft97PccFwEf9U=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
    rating: 8.6,
    updated: "20 Jan 2026",
    startTime: "18:30",
    runing: "Running Time",
    duration: "2h 49m"
  },
  {
    id: 2,
    moviname: "Inception",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bTru3smhD-EqL3DlDzuUBrkFW7aEW9qQ9Q&s",
    rating: 8.8,
    updated: "18 Jan 2026",
    startTime: "21:00",
    runing: "Running Time",
    duration: "2h 28m"
  },
  {
    id: 3,
    moviname: "The Dark Knight",
    img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
    updated: "15 Jan 2026",
    startTime: "19:00",
    runing: "Running Time",
    duration: "2h 32m"
  },
  {
    id: 4,
    moviname: "Avatar",
    img: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    rating: 7.9,
    updated: "12 Jan 2026",
    startTime: "20:15",
    runing: "Running Time",
    duration: "2h 42m"
  },
  {
    id: 5,
    moviname: "Avengers: Endgame",
    img: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    rating: 8.4,
    updated: "10 Jan 2026",
    startTime: "22:00",
    runing: "Running Time",
    duration: "3h 2m"
  },
  {
    id: 6,
    moviname: "Titanic",
    img: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    rating: 7.8,
    updated: "08 Jan 2026",
    startTime: "17:45",
    runing: "Running Time",
    duration: "3h 14m"
  },
  {
    id: 7,
    moviname: "Doctor Strange",
    img: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    rating: 7.5,
    updated: "06 Jan 2026",
    startTime: "19:30",
    runing: "Running Time",
    duration: "1h 55m"
  },
  {
    id: 8,
    moviname: "Spider-Man: No Way Home",
    img: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    rating: 8.3,
    updated: "05 Jan 2026",
    startTime: "21:15",
    runing: "Running Time",
    duration: "2h 28m"
  },
  {
    id: 9,
    moviname: "Joker",
    img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    rating: 8.4,
    updated: "03 Jan 2026",
    startTime: "20:00",
    runing: "Running Time",
    duration: "2h 2m"
  },
  {
    id: 10,
    moviname: "Oppenheimer",
    img: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    rating: 8.7,
    updated: "02 Jan 2026",
    startTime: "18:00",
    runing: "Running Time",
    duration: "3h 0m"
  },
  {
    id: 11,
    moviname: "Dune",
    img: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    rating: 8.0,
    updated: "01 Jan 2026",
    startTime: "21:45",
    runing: "Running Time",
    duration: "2h 35m"
  }
]





  return (

    <div>
      {movie.map((item) => (
        <div className='moviecard' key={item.id}>

          <div className='img'>
            <img src={item.img} alt={item.moviname} height='100%' width='100%' />
          </div>

          <div className='movietext'>
            <div>
              <span>{item.moviname}</span>
              <span>{item.rating}</span>
            </div>

            <div>
              <span>{item.updated}</span>
              <span>{item.runing}</span>

            </div>

            <div>
              <span>{item.duration}</span>
              <span>{item.startTime}</span>
            </div>
          </div>
        </div>

      ))}
    </div>
  )
}

export default Card
