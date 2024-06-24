import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GoalGrid from "./home/GoalGrid";
import ResponsivBackground from "./home/ResponsivBackground";

const weightLossGoals = [
  "Lose 0-11 lbs",
  "Lose 12-22 lbs",
  "Lose 23-44 lbs",
  "Lose 45-88 lbs",
  "Lose 88+ lbs",
];

export default function Home() {
  return (
    <main className="relative overflow-scroll w-full">
      <Navbar />
      <div className="md:h-screen w-full bg-[#E2E9E5] text-[#444134]">
        <div className="h-max md:h-screen flex flex-col justify-evenly items-center md:flex-row">
          <GoalGrid goals={weightLossGoals} />
          <ResponsivBackground />
        </div>
      </div>
      <Disclaimer />
      <Footer />
    </main>
  );
}
