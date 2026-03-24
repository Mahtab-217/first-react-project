import Manager from "./Manager";
import StudenList from "./Student-list";
import "./style.css";
import Teachers from "./Teachers";
const managerList=[
  {
     id:1,
     name: "Essa",
     lastName: "Ehsani",
     age: 45,
     phoneNumber: "0798678594",
     degree: "Deploma",
     Adress: "Hotqol, Jaghori, Ghazni",
}
]
const TeachersList=[
  {
     id:1,
    name: "Ali",
    lastName: "Sarwari",
    age: 30,
  },
  {
     id:2,
    name: "Ali Reza",
    lastName: "Qasimi",
    age: 32,
  },
  {
     id:3,
    name: "Ali Aqa",
    lastName: "Ahmadi",
    age: 25,
  },
];

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
      <Teachers tList={TeachersList}/>
      <Manager/>
     </div>;
}