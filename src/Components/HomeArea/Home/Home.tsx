import "./Home.css";
import pizza from"../../../Assets/Images/pizza-maadanot.jpg"
export function Home(): JSX.Element {
    return (
        <div className="Home">
			<img src={pizza}/>
        </div>
    );
}
