

import { useRouter } from 'next/navigation';

const NavigationButtons = ({ previous, next }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push(previous);
  };

  const handleGoNext = () => {
    router.push(next);
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>
      <button onClick={handleGoNext}>Go Next</button>
    </div>
  );
};

export default NavigationButtons;
