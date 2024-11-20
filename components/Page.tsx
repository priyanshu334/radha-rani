import Card from "./Card";

const Page = () => {
  const cards = [
    { imageSrc: "./images/1.jpeg", text: "Card 1 Text" },
    { imageSrc: "./images/1.jpeg", text: "Card 2 Text" },
    { imageSrc: "./images/1.jpeg", text: "Card 3 Text" },
    { imageSrc: "./images/1.jpeg", text: "Card 4 Text" },
    { imageSrc: "./images/1.jpeg", text: "Card 5 Text" },
    { imageSrc: "./images/1.jpeg", text: "Card 6 Text" },
    { imageSrc: "./images/1.jpeg", text: "Card 7 Text" },
    { imageSrc: "./images/1.jpeg", text: "Card 8 Text" },
    { imageSrc: "./images/1.jpeg", text: "Card 9 Text" },
    { imageSrc: "./images/1.jpeg", text: "Card 10 Text" },
    { imageSrc: "./images/1.jpeg", text: "Card 11 Text" },
    { imageSrc: "./images/1.jpeg", text: "Card 12 Text" },
  ];

  return (
    <div className="min-h-screen flex flex-col mt-5  mr-36 ml-36">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4  lg:-m-24       ">
        {cards.map((card, index) => (
          <Card key={index} imageSrc={card.imageSrc} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default Page;
