import "./style.css"
export default function ManagerList(props){
    return (
        <div className="parent">
            
           {props.MList.map((person)=>(
              <div className="box"  key={person.id}>
                <h1>{person.name}</h1>
                <span>{person.lastName}</span>
                <span>{person.age}</span>
                <span>{person.adress}</span>
                <span>{person.phoneNumber}</span>
              </div>
           ))}
        </div>
    )
}