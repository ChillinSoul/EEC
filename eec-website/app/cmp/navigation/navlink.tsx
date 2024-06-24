import { NavItem } from "./navbar";

export default function Navlink(props: NavItem) {
    return (
        <li className="nav-item">
            <a className="hover:underline text-xl" href={props.link}>{props.text}</a>
        </li>
    );
}