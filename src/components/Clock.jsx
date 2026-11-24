
import { useEffect, useState } from "react";

function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h2>My Digital Clock</h2>
      <h1>{now.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;
