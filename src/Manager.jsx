import "./style.css"
export default function ManagerList(props){
    return (
        <div className="parent">
            
           {props.MList.map((person)=>(
              <div className="box"  key={person.id}>
                <h1>{person.name}</h1>
                <h5>{person.lastName}</h5>
                <h5>{person.age}</h5>
                <h5>{person.adress}</h5>
                <h5>{person.phoneNumber}</h5>
                <h5>{person.degree}</h5>
              </div>
           ))}
        </div>
    )
}