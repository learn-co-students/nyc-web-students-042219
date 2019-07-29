import React from 'react';
import TrendingCard from './TrendingCard'

function TrendingContainer() {
  return (
    <div className="trending-container">
      {
        data.map(trend => {
          return <TrendingCard key={trend.id} {...trend}/>
        })
      }
    </div>
  );
}

const data = [
  {
    id: 1,
    image_url: "https://thumbs-prod.si-cdn.com/E83RXuhjBGF2lBdQlpESCnmGBy8=/fit-in/1600x0/https://public-media.si-cdn.com/filer/consequences-of-evolution-631.jpg",
    topic: "Human Evolution",
    description:  "Mars resident describes how long forgotten prank gave rise to humans."
  },
  {
    id: 2,
    image_url: "https://alexandrialivingmagazine.com/downloads/2485/download/Dennys2.jpg?cb=b27c2cff646421e280abb5d191a05a53&w=600",
    topic: "Denny's",
    description:  "Recent surveys reveal restaurant chain Denny's as most visited extraterrestrial tourist attraction on Earth. Cites popularity of a dish called the 'Grand Slam'."
  },
  {
    id: 3,
    image_url: "https://cnet2.cbsistatic.com/img/pWj4SUxDX8tHsbH32qbv7JW2WSQ=/940x0/2019/05/22/5d095c91-5727-4651-9c33-938fe3c9f4a3/picard-meme-annoyed.jpg",
    topic: "Memes",
    description:  "The mysterious proliferance of 'meme culture' on Earth."
  },
  {
    id: 4,
    image_url: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/11/1489490934-alien-xenomorph.jpg?resize=480:*",
    topic: "'Alien' movie",
    description:  "Xenomorphs protest their depiction in popular human media"
  },

]

export default TrendingContainer;