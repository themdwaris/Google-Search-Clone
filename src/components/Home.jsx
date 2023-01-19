import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full flex flex-col px-5 items-center mt-40">
          <img className="w-[180px] md:[272px] mb-8" src={Logo} />
          <SearchInput />
          <div className="flex gap-4 text-[#77797E] mt-8">
            <button className="h-9 px-4 bg:[#F4F4F4] border rounded-md text-sm hover:border-[#dadce0] hover:shadow-c2">
              Google Search
            </button>
            <button className="h-9 px-4 bg:[#F4F4F4] border rounded-md text-sm hover:border-[#dadce0] hover:shadow-c2">
              I'm Feeling Lucky
            </button>
          </div>
          <div className="flex mt-7">
            <p className="text-[13px] text-gray-700 font-inter text-center">Google offered in: <a href="#" className="text-[#4285F4] hover:underline">हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ</a></p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
