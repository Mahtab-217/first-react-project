import "./style.css";
export default function Teachers(props){
    return (
        <div>
            <h1>List of The Teachers</h1>
            <div >
              {props.tList.length>0 &&(
                   <div className="parent">
                    {props.tList.map((t)=>(
                        <div key={t.id} className="box">
                            <h1>{t.name}</h1>
                            <h2>{t.lastName}</h2>
                            <h3>{t.age}</h3>
                        </div>
                    ))}
                   </div>
              )}
            </div>
        </div>
    )
}