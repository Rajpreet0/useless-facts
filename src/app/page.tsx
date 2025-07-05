import Image from "next/image";
import Logo from "../../public/images/useless_facts_logo.png"
import ClickSpark from "@/components/animations/ClickSpark/ClickSpark";
import Cards from "@/components/Cards";


export default function Home() {
  return (  
    <div className="w-full min-h-screen flex flex-col justify-around items-center">
      <Image
        priority
        unoptimized
        src={Logo}
        alt="UselessFacts Logo"
        width={200}
        height={200}
      />

      <div className=" flex flex-col justify-center items-center">
        <Cards/>
      </div>

      <div className="mt-12">
        <ClickSpark
          sparkColor='#AF8884'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
            <button 
              className="w-[150px] h-[50px] bg-pink text-black/70 text-xl font-bold rounded-lg shadow-xl  transition-all"
            >Generate</button>
        </ClickSpark>
      </div>

    </div>
  );
}
