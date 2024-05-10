import Button from "./Button";



const students = [
    {
        image: "./images/Abiola.jpg",
        title : "LAWAL ABIOLA",
        email : "lawalabiola411@gmail.com",
        Phone  : "08068411741",
        skills : [
            {
                data: "HTML",
                emoji: "✔",
                color: "orange"
            },
            {
                data: "CSS",
                emoji: "👍",
                color: "pink"
            },
            
            {
                data: "J.SCRIPT",
                emoji: "✌",
                color: "blue"
            },
            {
                data: "REACT",
                emoji: "👌",
                color: "pink"
            },
        ],
    },
    {
        image: "./images/img1.jpg",
        title : "oyin",
        email : "oyin@gmail.com",
        Phone  : "08068411741",
        skills : [
            {
                data: "HTML",
                emoji: "✔",
                color: "orange"
            },
            {
                data: "CSS",
                emoji: "👍",
                color: "pink"
            },
            
            {
                data: "J.SCRIPT",
                emoji: "✌",
                color: "blue"
            },
            {
                data: "REACT",
                emoji: "👌",
                color: "pink"
            },
        ],
    },
    {
        image: "./images/img1.jpg",
        title : "wale",
        email : "wale@gmail.com",
        Phone  : "08068411741",
        skills : [
            {
                data: "HTML",
                emoji: "✔",
                color: "orange"
            },
            {
                data: "CSS",
                emoji: "👍",
                color: "pink"
            },
            
            {
                data: "J.SCRIPT",
                emoji: "✌",
                color: "blue"
            },
            {
                data: "REACT",
                emoji: "👌",
                color: "pink"
            },
        ],
    },
    {
        image: "./images/Abiola.jpg",
        title : "LAWAL ABIOLA",
        email : "lawalabiola411@gmail.com",
        Phone  : "08068411741",
        skills : [
            {
                data: "HTML",
                emoji: "✔",
                color: "orange"
            },
            {
                data: "CSS",
                emoji: "👍",
                color: "pink"
            },
            
            {
                data: "J.SCRIPT",
                emoji: "✌",
                color: "blue"
            },
            {
                data: "REACT",
                emoji: "👌",
                color: "pink"
            },
        ],
    },
    {
        image: "./images/img1.jpg",
        title : "chucks",
        email : "chucks@gmail.com",
        Phone : "08068411741",
        skills : [
            {
                data: "HTML",
                emoji: "✔",
                color: "orange"
            },
            {
                data: "CSS",
                emoji: "👍",
                color: "pink"
            },
            
            {
                data: "J.SCRIPT",
                emoji: "✌",
                color: "blue"
            },
            {
                data: "REACT",
                emoji: "👌",
                color: "pink"
            },
        ],
    },
   

]

function Card(){
    return <>
      {students.map((student)=> <div className="card">
        <img src={`${process.env.PUBLIC_URL}/${student.image}`} alt="myImage"/>
    
       <h1 className="abiola">{student.title} ❤</h1>
       <p className="paragraph">Full-Stack web developer and Software Engineer at Boldlinks T.Solution.When not coding or preparing for course,i like to play Dice games,to cook (and eat),or to just enjoy the Nigeria sun at the beach.</p>
       <p className="para">{student.email}</p> 
       <p className="para"><span className="num"> {student.Phone} ☎.</span></p> 
       {student.skills.map((skill)=> <Button data={skill.data} emoji={skill.emoji} color={skill.color}/>)}    

      
    </div>)}
     

    </> 
    
}


export default Card;