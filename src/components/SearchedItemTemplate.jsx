

const SearchedItemTemplate = ({ data }) => {

    function createMarkup(html) {
        return {__html: html};
      }
  return (
    <div className="flex flex-col py-3 max-w-[720px]">
      <div
        className="group cursor-pointer"
        onClick={() => window.open(data.link)}
      >
        <div className="text-sm truncate text-[#28292b]">
        {data.formattedUrl}
        </div>
        <div className="title group hover:underline text-xl text-[#351ee5] pt-2">
        {data.title}
        </div>
        <div className="desc text-sm text-[#4d5156] leading-6 pt-1" dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}/>
      </div>
    </div>
  );
};

export default SearchedItemTemplate;
