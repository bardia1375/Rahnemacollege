import FingersSpeed from './pages/FingersSpeed'

function App() {
  return (
    <FingersSpeed/>
  )
}

export default App

// import { useState } from "react";
// import styled from "styled-components";
// import Timer from "./Components/Timer";
// import Result from "./pages/Result";

// interface Word {
//   id: number;
//   value: string;
//   accept: AcceptStatus;
// }

// type AcceptStatus = "true" | "false" | "";

// // Styled components
// const StringSpan = styled.span<{
//   accept: AcceptStatus;
//   isActive: boolean;
//   indexes: boolean;
// }>`
//   white-space: nowrap;
//   color: ${(props) =>
//     props.accept === "true" ? "green" : props.accept === "false" ? "red" : ""};
//   background-color: ${(props) =>
//     props.isActive ? "gray" : props.indexes ? "red" : ""};
// `;

// const StyledInput = styled.input`
//   width: 50%;
//   border-top: 1px solid #575757;
//   height: 50px;
//   border-right: 1px solid #6b7a89;
//   border-bottom: 1px solid #70869b;
//   border-left: 1px solid #525a62;
//   font-size: 2rem;
//   line-height: 1em;
//   background: url(https://img.10fastfingers.com/img/layout/sprite-main.png) 0px -60px
//     no-repeat;
//   font-family: Times New Roman, Times, serif;
//   color: #333;
// `;

// function App() {
//   const initialText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. Cras vehicula turpis a orci luctus, non bibendum metus pulvinar. Nulla malesuada lacus eget nunc laoreet, sed convallis risus eleifend. Fusce vitae ex urna. Morbi euismod orci vel urna pretium, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. Cras vehicula turpis a orci luctus, non bibendum metus pulvinar. Nulla malesuada lacus eget nunc laoreet, sed convallis risus eleifend. Fusce vitae ex urna. Morbi euismod orci vel urna pretium, et dictum quam condimentum. Etiam non elit eu nisi sodales feugiat a ac mauris. Integer et dictum dolor. Ut vel purus ac dolor bibendum vestibulum. Nullam a est et sem suscipit gravida. Nullam vitae purus dolor. Suspendisse et magna vitae ligula pharetra sagittis in nec orci. Duis vitae erat magna. Suspendisse quis nisl nec nisi aliquet vehicula. Vivamus vulputate ligula nec turpis congue, vel egestas orci tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. Cras vehicula turpis a orci luctus, non bibendum metus pulvinar. Nulla malesuada lacus eget nunc laoreet, sed convallis risus eleifend. Fusce vitae ex urna. Morbi euismod orci vel urna pretium, et dictum quam condimentum. Etiam non elit eu nisi sodales feugiat a ac mauris. Integer et dictum dolor. Ut vel purus ac dolor bibendum vestibulum. Nullam a est et sem suscipit gravida. Nullam vitae purus dolor. Suspendisse et magna vitae ligula pharetra sagittis in nec orci. Duis vitae erat magna. Suspendisse quis nisl nec nisi aliquet vehicula. Vivamus vulputate ligula nec turpis congue, vel egestas orci tincidunt.   `;
//   const initialWords = initialText.split(" ").map((word, index) => ({
//     id: index + 1, // Adding 1 to start ids from 1 (optional)
//     value: word,
//     accept: "",
//   }));

//   const [text, setText] = useState(initialText);
//   const [id, setId] = useState<number>(0);
//   const [search, setSearch] = useState<string>("");
//   const [changeHandlerTimer, setChangeHandlerTimer] = useState<boolean>(false);
//   const [strings, setStrings] = useState<Word[]>(initialWords);
//   const [timerKey, setTimerKey] = useState<number>(0); // Key for resetting Timer
//   const [correctCount, setCorrectCount] = useState<number>(0);
//   const [incorrectCount, setIncorrectCount] = useState<number>(0);
//   const [endTime, setEndTime] = useState<boolean>(false);

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     setChangeHandlerTimer(true);

//     if (event.code === "Space") {
//       event.preventDefault(); // Prevent adding space to input
//       if (search.trim() === "") {
//         setSearch("");
//       } else {
//         setId((prev) => prev + 1);
//         const isCorrect = strings[id].value.trim() === search.trim();

//         setStrings((prevStrings) =>
//           prevStrings.map((word, index) =>
//             index === id
//               ? {
//                   ...word,
//                   accept: isCorrect ? "true" : "false",
//                 }
//               : word
//           )
//         );

//         if (isCorrect) {
//           setCorrectCount((prev) => prev + 1);
//         } else {
//           setIncorrectCount((prev) => prev + 1);
//         }

//         setSearch("");

//         if (id + 1 === 10) {
//           rearrangeLines();
//         }
//       }
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value);
//   };

//   const rearrangeLines = () => {
//     setStrings((prevStrings) => prevStrings.slice(10));
//     setId((prev) => prev - 10);
//   };

//   const handleString = (
//     lineNumber: number,
//     numberOfWordsInEachLine: number
//   ) => {
//     return strings.map((string, index) => {
//       if (
//         string.id > lineNumber &&
//         string.id <= lineNumber + numberOfWordsInEachLine
//       ) {
//         return (
//           <StringSpan
//             key={string.id}
//             accept={string.accept}
//             isActive={index === id && string.value.startsWith(search)}
//             indexes={index === id}
//           >
//             {string.value + " "}
//           </StringSpan>
//         );
//       }
//       return null;
//     });
//   };

//   const handleLinesRecursive = (
//     startIndex: number,
//     numberOfWordsInEachLine: number,
//     accumulatedLines: JSX.Element[] = []
//   ): JSX.Element[] => {
//     if (startIndex >= strings.length) {
//       return accumulatedLines;
//     }
//     const newLine = (
//       <div key={startIndex}>
//         {handleString(startIndex, numberOfWordsInEachLine)}
//       </div>
//     );

//     return handleLinesRecursive(
//       startIndex + numberOfWordsInEachLine,
//       numberOfWordsInEachLine,
//       [...accumulatedLines, newLine]
//     );
//   };

//   const refreshHandler = () => {
//     setText(initialText);
//     setStrings(initialWords);
//     setId(0);
//     setSearch("");
//     setChangeHandlerTimer(false);
//     setTimerKey((prev) => prev + 1); // Increment key to reset Timer
//     setCorrectCount(0);
//     setIncorrectCount(0);
//     setEndTime(false);

//   };

//   const handleEndTime = () => {
//     setEndTime(true);
//   };
//   console.log("Correct words:", correctCount);
//   console.log("Incorrect words:", incorrectCount);

//   return (
//     <div
//       style={{
//         margin: "100px auto",
//         width: "max-content",
//         minWidth: "1100px",
//         fontSize: "2rem",
//       }}
//     >
//       {!endTime && (
//         <div
//           style={{
//             height: "100px",
//             // height: "100%",
//             padding: "4px",
//             borderRadius: "4px 8px",
//             overflow: "hidden",
//             background: "#fff",
//             color: "black",
//           }}
//         >
//           {handleLinesRecursive(0, 10)}
//         </div>
//       )}

//       <div
//         style={{
//           display: "flex",
//           marginTop: "8px",
//           justifyContent: "center",
//           gap: "8px",
//         }}
//       >
//         <StyledInput
//           onKeyDown={handleKeyDown}
//           value={search}
//           onChange={handleChange}
//           type="text"
//         />
//         <Timer changeHandlerTimer={changeHandlerTimer} onEnd={handleEndTime} key={timerKey}/>
//         <div onClick={refreshHandler} style={{ cursor: "pointer" }}>
//           refresh
//         </div>
//       </div>
//       {endTime && (
//         <Result correctWords={correctCount} wrongWords={incorrectCount} />
//       )}

//     </div>
//   );
// }

// export default App;


