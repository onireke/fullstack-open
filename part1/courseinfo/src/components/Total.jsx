function Total(props){
  

    const total = props.part.reduce((acc, cur) => acc + cur.exercises, 0)
  

    return (
        <p>Total of  exercises {total}</p>


    );
}

export default Total

