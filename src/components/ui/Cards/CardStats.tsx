import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIcon,
  statIconColor,
}: any) {
  return (
    <>
      <div className="relative mb-6 flex min-w-0 flex-col break-words rounded bg-white shadow-lg xl:mb-0">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full max-w-full flex-1 flex-grow pr-4">
              <h5 className="text-xs font-bold uppercase text-slate-400">
                {statSubtitle}
              </h5>
              <span className="text-xl font-semibold text-slate-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto flex-initial pl-4">
              <div
                className={
                  'inline-flex h-12 w-12 items-center justify-center rounded-full p-3 text-center text-white shadow-lg ' +
                  statIconColor
                }
              >
                <FontAwesomeIcon icon={statIcon} />
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            <span className={statPercentColor + ' mr-2'}>
              <i
                className={
                  statArrow === 'up'
                    ? 'fas fa-arrow-up'
                    : statArrow === 'down'
                    ? 'fas fa-arrow-down'
                    : ''
                }
              ></i>{' '}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statSubtitle: 'Traffic',
  statTitle: '350,897',
  statArrow: 'up',
  statPercent: '3.48',
  statPercentColor: 'text-emerald-500',
  statDescripiron: 'Since last month',
  statIconName: 'far fa-chart-bar',
  statIconColor: 'bg-red-500',
};

// CardStats.propTypes = {
//   statSubtitle: PropTypes.string,
//   statTitle: PropTypes.string,
//   statArrow: PropTypes.oneOf(["up", "down"]),
//   statPercent: PropTypes.string,
//   // can be any of the text color utilities
//   // from tailwindcss
//   statPercentColor: PropTypes.string,
//   statDescripiron: PropTypes.string,
//   statIconName: PropTypes.string,
//   // can be any of the background color utilities
//   // from tailwindcss
//   statIconColor: PropTypes.string,
// };
