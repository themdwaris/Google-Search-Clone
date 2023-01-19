const SearchedImageItemTemplate = ({data}) => {

  return (
    <div
      className="py-3 flex flex-col group cursor-pointer"
      onClick={() => window.open()}
    >
        <div className="rounded-xl overflow-hidden h-[100px] md:h-[120px] xl:h-[140px] bg-black/[0.3] group-hover:shadow-c">
            <img className="h-full w-full object-contain" src={""} alt="img"/>
        </div>
    </div>
  );
};

export default SearchedImageItemTemplate;
