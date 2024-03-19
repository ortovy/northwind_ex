import { useTitle } from "../../../Utils/useTitle";
import "./Page404.css";

export function Page404(): JSX.Element {
    useTitle("Northwind | 404")
    return (
        <div className="Page404">
			Page Doesn't exist 
        </div>
    );
}
