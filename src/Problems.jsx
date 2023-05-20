import { useState } from "react"
import './problems.css'

const problems1 = [{
   title:"Two Sum",
   difficulty:'Easy',
   acceptance:"78% "
},{
  title:"Add two numbers",
  difficulty:'Medium',
  acceptance:"61% "
},{
  title:"Dice",
  difficulty:'Hard',
  acceptance:"32% "
},{
  title:"Multiply two numbers",
  difficulty:'Medium',
  acceptance:"62% "
},]
const problems2 = [{
   title:"Factorial",
   difficulty:'Easy',
   acceptance:"98% "
},{
  title:"Count number of consonants",
  difficulty:'Hard',
  acceptance:"31% "
},{
  title:"Split",
  difficulty:'Hard',
  acceptance:"32% "
},{
  title:"Concatenate Strings",
  difficulty:'Hard',
  acceptance:"92% "
},]

export default function Problems() {
  const [problem, setProblem] = useState(problems1)

  return (
    <div className="container">
       <div>
       <table>
          {TableCaption()}
          {problem.map((problem,index) => ( <ProblemStatement
           title={problem.title} 
           acceptance={problem.acceptance} 
           difficulty={problem.difficulty}
           key = {index}
          />)
            )}
       </table>
        </div>
        <div className="btn-container">
        <button onClick={()=> setProblem(problems1)} className="login-button"> 1</button>
        <button onClick={()=> setProblem(problems2)} className="login-button">2</button>
      </div>
    </div>
  )
}
function TableCaption(){
  return(
    <>
  <caption><h2>
  Problems
  </h2>
  </caption>
  <tr>
    <th className="title-text" >Title</th>
    <th>Acceptance</th>
    <th>Difficulty</th>
  </tr>
</>

  )
}


function ProblemStatement(props){
    // const key = props.key
    const title = props.title
    const acceptance = props.acceptance
    const difficulty = props.difficulty
    return (<tr>
      <td className="title-text">
        {title}
      </td>
      <td>
        {acceptance}
      </td>
      <td >
        {difficulty}
      </td>
    </tr>)
  }