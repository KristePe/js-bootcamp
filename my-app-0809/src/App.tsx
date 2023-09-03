import React, { useEffect, useState } from "react";
import { CLIENT_RENEG_LIMIT } from "tls";

const App = () => {
  const [init, upda] = useState(1);
  const [init2, upda2] = useState(1);

  useEffect(() => {
    console.log(init);
  }, [init]);
  return (
    <div>
      <button onClick={() => upda((pre) => pre + 1)}>AAA-{init}</button>
      <button onClick={() => upda2((pre) => pre + 1)}>BBB-{init2}</button>
    </div>
  );
};

export default App;
