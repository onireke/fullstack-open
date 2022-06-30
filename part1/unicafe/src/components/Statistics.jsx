import StatisticLine from "./StatisticLine";
function Statistics(props){
    if(props.allClicks === 0){
        return(
            <div>
                <h1>Statistics</h1> 
                <p>No feedback given</p> 
            </div>

        );
    }
    return(


              <div>
                   <h1>statistics</h1>
                   <StatisticLine text='good' value={props.good}/>
                   <StatisticLine text='neutral' value={props.meutral}/>
                   <StatisticLine text='bad' value={props.bad}/>
                   <StatisticLine text='all' value={props.allClicks}/>
                   <StatisticLine text= 'Average' value={props.average}/>
                   <StatisticLine text='Positive' value={props.positive}/>
              </div>
           );
}


export default Statistics