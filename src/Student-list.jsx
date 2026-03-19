import "./style.css"
export default function StudenList(props){
    return (
        <div className="parent">
           {props.stList.map((person)=>(
              <div className="box"  key={person.id}>
                <h1>{person.name}</h1>
                <span>{person.lastName}</span>
              </div>
           ))}
        </div>
    )
}