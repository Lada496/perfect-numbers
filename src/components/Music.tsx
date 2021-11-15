import { useState, useEffect, useCallback } from "react";
import { music } from "../music/music";
import freqBase10 from "../data/frequency-base10.json";

const test: string =
  "23562723457267347065789548996709904988477547858392600710143027597506337283178622239730365539602600561360255566462503270175052892578043215543382498428777152427010394496918664028644534128033831439790236838624033171435922356643219703101720713163527487298747400647801939587165936401087419375649057918549492160555646976";
const arrTest: string[] = test.split("");

const Music = () => {
  const [stop, setStop] = useState<boolean>(true);
  const [timeoutId, setTimeoutId] = useState<null | Object>(null);
  const [i, setI] = useState<number>(0);
  // let i = 0;
  const play = useCallback(() => {
    console.log("click");
    setStop(false);
    const timeoutId = setInterval(() => {
      console.log(+arrTest[i]);

      //   setSound(freqBase10[+arrTest[i]]);
      music(freqBase10[+arrTest[i]]);
      setI(i + 1);
      if (i === test.length || stop) {
        clearInterval(timeoutId);
        setI(0);
        //   setSound(null);
      }
    }, 250);
  }, [stop, i]);

  // useEffect(() => {
  //   if (!stop) {
  //     play();
  //   }
  // }, [play, stop]);

  return (
    <div>
      <button onClick={() => setStop(false)}>Play</button>
      <button
        onClick={() => {
          setStop(true);
        }}
      >
        Stop
      </button>
    </div>
  );
};

export default Music;
