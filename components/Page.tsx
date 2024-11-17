import Card from "./Card";

const Page = ()=>{
    const cards = [
        {
          imageSrc: "https://via.placeholder.com/300x200?text=Card+1",
          text: "Card 1 Text",
        },
        {
          imageSrc: "https://via.placeholder.com/300x200?text=Card+2",
          text: "Card 2 Text",
        },
        {
          imageSrc: "https://via.placeholder.com/300x200?text=Card+3",
          text: "Card 3 Text",
        },
        {
            imageSrc: "https://via.placeholder.com/300x200?text=Card+1",
            text: "Card 1 Text",
          },
          {
            imageSrc: "https://via.placeholder.com/300x200?text=Card+2",
            text: "Card 2 Text",
          },
          {
            imageSrc: "https://via.placeholder.com/300x200?text=Card+3",
            text: "Card 3 Text",
          },
          {
            imageSrc: "https://via.placeholder.com/300x200?text=Card+1",
            text: "Card 1 Text",
          },
          {
            imageSrc: "https://via.placeholder.com/300x200?text=Card+2",
            text: "Card 2 Text",
          },
          {
            imageSrc: "https://via.placeholder.com/300x200?text=Card+3",
            text: "Card 3 Text",
          },
          {
              imageSrc: "https://via.placeholder.com/300x200?text=Card+1",
              text: "Card 1 Text",
            },
            {
              imageSrc: "https://via.placeholder.com/300x200?text=Card+2",
              text: "Card 2 Text",
            },
            {
              imageSrc: "https://via.placeholder.com/300x200?text=Card+3",
              text: "Card 3 Text",
            },
      ];
      return(
        <div className=" min-h-screen flex flex-col mt-5 -mr-20 ml-4 ">
           
       <div className=" ml-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card,index)=>(
            <Card key={index} imageSrc={card.imageSrc} text={card.text}/>
        ))}

       </div>
        </div>
      )
}

export default Page;