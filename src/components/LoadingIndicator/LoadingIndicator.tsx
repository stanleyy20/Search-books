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
          left: 0,
        }}>
        <TailSpin color='#ff3d4f' height={40} width={40} />
      </div>
    );
  else return null;
};

export default LoadingIndicator;
