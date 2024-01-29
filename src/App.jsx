import { useState, useCallback } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [characterAllow, setCharacterAllow] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let strg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) strg += "0123456789";
    if (characterAllow) strg += "+-#$^&(){}@~``_-!";

    for (let i = 1; index < length; i++) {
      const char = Math.floor(Math.random * strg.length + 1);
    }
  }, [length, numberAllow, characterAllow, setPassword]);

  return (
    <div className="bg-emerald-500 h-screen w-full flex item-center">
      <div className="bg-white w-[400px] h-40 border rounded-lg m-auto"></div>
    </div>
  );
}

export default App;
