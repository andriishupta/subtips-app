import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useWeb3 } from '@web3/context';

export default function SubTipsStatus() {
  const { subsocialApi, error } = useWeb3();

  return (
    <>
      SubTips{' '}
      {subsocialApi ? (
        ' 🟢'
      ) : error ? (
        ' 🔴'
      ) : (
        <>
          {' '}
          <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
        </>
      )}
    </>
  );
}
