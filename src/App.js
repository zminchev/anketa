import imageSrc from "./assets/image-toilet.png";
import { useCallback, useState } from "react";
import "./App.css";
import { satisfaction } from "./mock/mock";
import Emoji from "./components/Emoji/Emoji";

function App() {
  const [loading, setLoading] = useState(false);

  const completeSatisfaction = useCallback((title) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    alert(`Благодарим ви за оценката! - ${title}`);
    }, 1000);
  }, []);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Зареждаме оценката!...</h1>;
  }

  return (
    <div className="App">
      <h1>Как бихте оценили нашата тоалетна?</h1>
      <img
        src={imageSrc}
        alt="Toilet"
        height={400}
        width={400}
        style={{ objectFit: "cover" }}
      />
      <div
        style={{
          paddingTop: "30px",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {satisfaction.map((item) => (
          <button
            key={item.id}
            style={{ background: "none", border: "none" }}
            onClick={() => completeSatisfaction(item.title)}
          >
            <Emoji type={item.type} title={item.title} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
