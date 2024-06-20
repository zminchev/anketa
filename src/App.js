import imageSrc from './assets/image-toilet.png';
import { useCallback, useState } from 'react';
import { satisfaction } from './mock/mock';
import Emoji from './components/Emoji/Emoji';

function App() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [showThankYouScreen, setShowThankYouScreen] = useState(false);

  const completeSatisfaction = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowThankYouScreen(true);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <h1 className="text-center text-2xl">Зареждаме оценката!...</h1>
      </div>
    );
  }

  if (!loading && showThankYouScreen) {
    return (
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center py-10 font-bold">
          Благодарим Ви за вашата оценка, {title}!
        </h1>
        <button
          onClick={() => {
            setShowThankYouScreen(false);
            setTitle('');
          }}
          className="bg-gray-600 text-white font-bold p-2"
        >
          Върни се обратно
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-col items-center w-full">
      <h1 className="text-4xl font-bold text-center pb-[10px]">
        Как бихте оценили нашата тоалетна?
      </h1>
      <img
        src={imageSrc}
        alt="Toilet"
        className="object-cover w-[400px] h-[400px]"
      />
      <div className="flex pt-[30px] w-full justify-center gap-10 flex-wrap">
        {satisfaction.map((item) => (
          <button
            key={item.id}
            className="w-12 h-12 flex justify-center items-center flex-col"
            onClick={() => {
              completeSatisfaction();
              setTitle(item.title);
            }}
          >
            <Emoji type={item.type} title={item.title} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
