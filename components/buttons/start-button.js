

import { useRouter } from 'next/navigation';

const StartButton = () => {
  const router = useRouter();

  
  const handleGoNext = () => {
    router.push('/questionone');
  };

  return (
    <div>
      <button onClick={handleGoNext}>Start Test</button>
    </div>
  );
};

export default StartButton;
