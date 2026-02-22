
const Card = (props) => {
  return (
   <>
   <div className="parent">
    <div className="child">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKaVm5tchOsvEE93SSwLRtYwehUg3LWWkkg&s" alt="none" />
        <h1>{props.user}</h1>
        <p>{props.det}</p>
        <button>View Profile</button>
    </div>
   </div>
   </>
  )
}

export default Card