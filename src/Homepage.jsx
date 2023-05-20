import './homepage.css'

export default function Homepage() {
const blogArray = [{
  title:"Why Code?",
  content:"Through coding, children develop sophisticated and important life skills. Coding is all about applied problem solving through logical, critical and creative thinking"
},{
  title:"How to start?",
  content:"For example, say you want to become a developer to earn more income for your family. Do you know where you want to work and what kind of projects they need developers for? Are you ready to put in the time to learn to code, learn the right programming languages, and build projects that show you have what it takes?"
},{
  title:"Best Coding Language",
  content:"As far as web and software development goes, Python, followed by Java, JavaScript, and C++, are among the most popular programming languages in today’s market."
},{
  title:"What is DSA?",
  content:"A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem. Learning data structures and algorithms allow us to write efficient and optimized computer programs."
}] 
   function BlogCreation(props){
    const title= props.title
    const content = props.content
      return (
          <div className='blog-container'>
            <h2>{title}</h2>
          <p>
          {content}
          </p>
          </div>
        )
      }
      
  return (
    <div className='blogs-container'>
        <h1 id="h1">Welcom to LeetCode</h1>
        {blogArray.map(value => <BlogCreation title={value.title} content={value.content}/>)}
    </div>
    
    
    
    )}