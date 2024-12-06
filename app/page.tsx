import ComoFunciona from "@/components/ComoFunciona";
import Slides from "@/components/Slides";

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl py-10">
      <Slides />
      <ComoFunciona />
    </div>
  );
}
