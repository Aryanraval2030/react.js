import fiction from "../data/fiction.json"
function Fiction() {


  return (
    <div>

      <div className=" grid sm:grid-cols-1 
                    md:grid-cols-2 
                    lg:grid-cols-3 
                    xl:grid-cols-4 gap-4 ">
        {
          fiction.map((items, inx) => (
            <div key={inx} className="shadow-md shadow-black rounded-2xl w-[250px] flex flex-col items-center p-2">

              <div className="border-2 border-black h-[200px] w-[150px] p-1">
                <img src={items.img} alt="" className="h-[100%] w-[100%]" />
              </div>

              <p>{items.title} {`(${items.year})`}</p>
              <p>{items.author}</p>
              <p>{`price:`}{items.price}</p>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Fiction
