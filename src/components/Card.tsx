import { useEffect, useState } from "react";

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  
  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);

  useEffect(() => {
    console.log("Card mounted");

    return () => {
      console.log("Card unmounted");
    }
  }, [selected])

  return (
    <div>
      {selected && <p>Selected</p>}
      <h1>{title}</h1>
      <p>subtile</p>
      <button onClick={() => setSelected(current => !current)}>tes</button>
    </div>
  );
};

export default Card;
