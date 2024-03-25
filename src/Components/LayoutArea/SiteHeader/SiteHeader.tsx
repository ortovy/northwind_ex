import { AuthMenu } from "../../AuthArea/AuthMenu/AuthMenu";
import "./SiteHeader.css";

export function SiteHeader(): JSX.Element {
    return (
        <div className="SiteHeader">
            <AuthMenu/>
			<h1>NorthWind Website</h1>
        </div>
    );
}
