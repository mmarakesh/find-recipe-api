function MyReComponent({label, image, calories, ingredients}) {
    return(
<div>
<div className="container">
<h2>{label}</h2>
</div>

<div className="container">
<img src = {image} alt="food"/>
</div>

<div className="container list"> 
    <ul>{ingredients.map((item, index) => (
        <li key = {index}>
        <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png " alt="icon" width="30px"/>
        {item}</li>
    ))}</ul>
</div>

<div className="container">
<p>{calories.toFixed()} calories</p>
</div>
</div>
    )
}

export default MyReComponent;