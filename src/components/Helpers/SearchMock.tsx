import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchMock() {
  return (
    <form className="mr-3 hidden flex-row flex-wrap items-center md:flex lg:ml-auto">
      <div className="relative flex w-full flex-wrap items-stretch">
        <span className="absolute absolute z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pl-3 text-center text-base font-normal leading-snug text-slate-300">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input
          disabled
          type="text"
          placeholder="Comming soon..."
          className="relative w-full cursor-not-allowed rounded border-0 bg-white bg-white px-3 py-3 pl-10 text-sm text-slate-600 placeholder-slate-300 shadow outline-none focus:outline-none focus:ring"
        />
      </div>
    </form>
  );
}