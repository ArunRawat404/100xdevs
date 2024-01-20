import { BusinessCard } from './components/BusinessCard'
import { useState } from "react";

function App() {
  const [cards, setCards] = useState({
    name: "Arun Rawat",
    description: "A software developer",
    interests: ["Web Development", "Open Source", "Gaming"],
    socials: [{
      socialName: "Github",
      link: "https://github.com/ArunRawat404"
    }, {
      socialName: "linkedin",
      link: "https://twitter.com/arunrawat404"
    }]
  });
  return (
    <div>
      <BusinessCard cards={cards}></BusinessCard>
    </div >
  )
}

export default App
