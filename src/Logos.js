function TechLogo(props) {
    return <img src={`/imgs/logos/tech${props.box ? "Box" : ""}/${props.logo}.svg`} alt={props.logo} />
}

function SocialLogo(props) {
    return <img onClick={props.onClick} className={props.className} src={`/imgs/logos/social/${props.logo}.svg`} alt={props.logo} />
}

export { TechLogo, SocialLogo }