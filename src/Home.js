import './Home.css';

const userData=[
  {
    name:"Suresh",
    city:"New yark",
    desc:"Python Developer",
    skills:["UI / UX","Front End Development","HTML","CSS","Javascript","React"],
    online:false,
    photo:"1.jpg"
  },
  {
    name:"Vinoth",
    city:"Madurai",
    desc:"Java Developer",
    skills:["UI / UX","Front End Development","HTML","CSS","Javascript","React"],
    online:true,
    photo:"2.jpeg"
  },
  {
    name:"Suresh",
    city:"New yark",
    desc:"Python Developer",
    skills:["UI / UX","Front End Development","HTML","CSS","Javascript","React"],
    online:false,
    photo:"1.jpg"
  }
];
function User(props)
{ 
  
    return(
        <div className="card-container">
          <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
          <img src={props.photo} alt="user" className='img'></img>
          <h3>{props.name}</h3>
          <h3>{props.city}</h3>
          <p>{props.desc}</p>
          <div className='buttons'>
            <button className='primary'>Message</button>
            <button className='primary outline'>Following</button>
          </div>
          <div className='skills'>
            <h6>Skills</h6>
            <ul>
              {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))}
            </ul>
          </div>
        </div>
    )
}

export const Home = () => {
    
  return (
    // <User name="Vinoth" city="Dindigul" desc="Full Stack Developer" skills={
    // ["UI / UX","Front End Development","HTML","CSS","Javascript","React"]} online={true} photo="1.jpg"/>
    <>
    {userData.map((user,index)=>(
      <User key={index} name={user.name} city={user.city} desc={user.desc} skills={user.skills} online={user.online} photo={user.photo} />
    ))}
    </>
  )
}
