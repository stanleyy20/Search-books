import { usePromiseTracker } from 'react-promise-tracker';
import { TailSpin } from 'react-loader-spinner';

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();
  if (promiseInProgress)
    return (
      <div
        style={{
          position: 'absolute',
          marginTop: '30px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TailSpin color='#64ffda' height={40} width={40} />
      </div>
    );
  else return null;
};

export default LoadingIndicator;
