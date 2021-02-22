import { v4 as uuidv4 } from "uuid";

const ChillHop = () => {
  return [
    {
      name: "sopha",
      artist: "Plusma, Von Wegen",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8124",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#f9aaa6", "#c1b4d1"],
    },
    {
      name: "Peaches",
      artist: "Philanthrope, The Field Tapes",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11245",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#585F6F", "#DBE8DF"],
    },
    {
      name: "Hidden Structure",
      artist: "Leavv, Flitz&Suppe",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#589479", "#E0DBA6"],
    },
    {
      name: "ebb//flo",
      artist: "invention_",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8741",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#6BAEA0", "#708FA3"],
    },
  ];
};

export default ChillHop;
