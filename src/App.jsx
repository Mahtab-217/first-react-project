import StudenList from "./Student-list";
import "./style.css";
const list=[
  {
    id:1,
    name: "Ali",
    lastName: "Sarwari",
  },
  {
    id:2,
    name: "Muhammad",
    lastName: "Sharifi",
  },
  {
    id:3,
    name: "Hussain",
    lastName: "Tawakoli",
  },
  {
    id:4,
    name: "Lyal",
    lastName: "Sanayi",
  },
  {
    id:5,
    name: "Ali Reza",
    lastName: "Ahmadi",
  },
]
export default function App(){
     return   <div>
      <nav>
        <h1>My app</h1>
        <button>Save</button>
      </nav>
      <StudenList stList={list}/>
     </div>;
}