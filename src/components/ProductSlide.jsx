import RatedCard from "../components/cards/RatedCard";
import PricedCard from "../components/cards/PricedCard";

export default function ProductSlide({ title = "Featured Products", products = null, rated = false }) {
  let card;

  if (rated) {
    card = <RatedCard products={products} />;
  } else {
    card = <PricedCard products={products} />;
  }

  return (
    <div className="w-full my-4">
      <div className="flex items-center overflox-x-scroll md:overflow-x-hidden font-bold mt-[48px] justify-between mb-4">
        <div>{title}</div>
        <div className="flex gap-2 items-center">
          <span>See More</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <div>
        {card}
      </div>
    </div>
  );
}
