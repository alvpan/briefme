import Image from "next/image";

export default function Home() {
  return(
    // Main container for centering things
    <main className="flex ietms-center justify-center min-h-screen bg-gray-500 p-4">

      {/* Time selector */}
      <div className="w-[50mm] h-[50mm] bg-white rounded-md p-8 shadow-lg mr-4">
        <h1 className="text-gray-600 font-bold text-sm">Brief for the past:</h1>
      </div>

      {/*A4*/}
      <div className="w-[210mm] h-[297mm] bg-white rounded-md p-8 shadow-lg">
        <div className=" mb-4 bg-red-600">
          <h1 className="ml-2 text-white font-bold text-2xl">Briefme:</h1>
        </div>
        <p className="text-black">Briefing text 1.</p>
      </div>
    </main>
    );
  

}