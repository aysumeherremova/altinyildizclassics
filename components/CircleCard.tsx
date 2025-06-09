import Image from "next/image";
import circlecard1 from "../public/circlecard1.png";
import circlecard2 from "../public/circlecard2.png";
import circlecard3 from "../public/circlecard3.png";
import circlecard4 from "../public/circlecard4.png";
import circlecard5 from "../public/circlecard5.png";
import circlecard6 from "../public/circlecard6.png";
import circlecard7 from "../public/circlecard7.png";

const giftGuideData = [
  { src: circlecard1 },
  { src: circlecard2 },
  { src: circlecard3 },
  { src: circlecard4 },
  { src: circlecard5 },
  { src: circlecard6 },
  { src: circlecard7 },
];

export default function CircleCard() {
  return (
    <div className="flex flex-row justify-center items-center gap-4 overflow-x-auto p-4">
      {giftGuideData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center space-y-1 shrink-0"
        >
          <div className="relative w-40 h-40">
            <Image
              src={item.src}
              alt={`Hediye Kart ${index + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
