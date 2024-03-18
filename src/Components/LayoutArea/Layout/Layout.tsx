import { Home } from "../../HomeArea/Home/Home";
import { Copyrights } from "../Copyrights/Copyrights";
import { Menu } from "../Menu/Menu";
import { SiteHeader } from "../SiteHeader/SiteHeader";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header>
                <SiteHeader/>
            </header>
            <aside>
                <Menu/>
            </aside>
            <main>
                <Home/>
            </main>
            <footer>
                <Copyrights/>
            </footer>
        </div>
    );
}
