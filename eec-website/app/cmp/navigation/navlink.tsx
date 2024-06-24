

export default function Navlink(props: {text: string, link: string}) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.link}>{props.text}</a>
        </li>
    );
}