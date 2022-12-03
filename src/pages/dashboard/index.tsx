import ProfileHandleOrWallet from './[profileHandleOrWallet]';

export default function Dashboard({ defaultProfile, profiles }: any) {
  if (!defaultProfile) {
    return <PickProfileOrSetDefault profiles={profiles} />;
  }

  return (
    <>
      <ProfileHandleOrWallet profileHandle={defaultProfile} />
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      defaultProfile: 'default.lens',
    },
  };
}

const PickProfileOrSetDefault = ({ profiles }: any) => {
  return (
    <>
      <h2>Pick profile</h2>
      <h2>Or Set Default Profile - Lenster Link(?)</h2>
    </>
  );
};
