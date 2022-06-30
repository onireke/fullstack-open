
import Header from "./Header";
import Content from "./Content";


const Course= ({name, part})=>{
    return(

        <div>
            <Header  course={name} />
            <Content  part={part}/>

         
        </div>

    )
}

export default Course