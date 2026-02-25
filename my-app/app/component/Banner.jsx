export default function Banner() {
  const bannerText = ["BECOME EMPOWERED", "BECOME STRONGER", "BECOME FITTER", "BECOME HEALTHIER"];

  return (
    <div className="py-26 overflow-hidden bg-stone-900/80" aria-hidden>
      <ul className="flex animate-marquee">
        {bannerText.concat(bannerText).map((text, index) => (
          <li key={index} className="font-mono text-lg md:text-xl font-semibold tracking-[0.25em] uppercase text-[#3b82f6] whitespace-nowrap opacity-90 pr-12 md:pr-16 shrink-0">{text}</li>
        ))}
      </ul>
    </div>
  );
}