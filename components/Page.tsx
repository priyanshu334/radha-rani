import Card from "./Card";

const Page = ()=>{
    const cards = [
        {
            imageSrc: "./images/1.jpeg",
            text: "Card 2 Text",
          },
          {
            imageSrc: "./images/1.jpeg",
            text: "Card 2 Text",
          },
          {
            imageSrc: "./images/1.jpeg",
            text: "Card 2 Text",
          },
          {
            imageSrc: "./images/1.jpeg",
            text: "Card 2 Text",
          },
          {
            imageSrc: "./images/1.jpeg",
            text: "Card 2 Text",
          },
          {
            imageSrc: "./images/1.jpeg",
            text: "Card 2 Text",
          },
          {
            imageSrc: "./images/1.jpeg",
            text: "Card 2 Text",
          },
          {
            imageSrc: "./images/1.jpeg",
            text: "Card 2 Text",
          },
          {
            imageSrc: "./images/1.jpeg",
            text: "Card 2 Text",
          },
          {
            imageSrc: "./images/1.jpeg",
            text: "Card 2 Text",
          },
          {
            imageSrc: "./images/1.jpeg",
            text: "Card 2 Text",
          },
          {
            imageSrc: "./images/1.jpeg",
            text: "Card 2 Text",
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