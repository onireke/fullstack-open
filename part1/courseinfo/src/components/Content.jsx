import Part from "./Part";



function Content({part}) {
 return(
     <div>


      {part.map((part, i) => <Part key={i} name={part.name} exercises={part.exercises} />)}
        

     </div>
    );
}

export default Content