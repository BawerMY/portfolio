import style from "./style";

function Button(props) {
    return (
        <button className={`
            rounded-lg
            px-3.5
            py-2.5
            text-[${style.font.code}]
            leading-[${style.leading.code}]
            text-[${props.textColor}]
            bg-[${props.bgColor}]
            hover:bg-[${props.hoverBgColor}]
            ${props.border ? `border-[1px] border-[${props.border}]` : ""}
            ${props.hoverBorder ? `border-[1px] hover:border-[${props.hoverBorder}]` : ""}
        `}>{props.text}</button>
    )
}
let PrimaryButton = (props) =>  <Button text={props.text} textColor={style.colors.primary[0]} bgColor={style.colors.accent[0]} hoverBgColor="#FFAC6B" />
let DefaultButton = (props) =>  <Button text={props.text} textColor={style.colors.secondary[3]} bgColor="#1C2B3A" hoverBgColor="#263B50" />
let GhostButton = (props) =>  <Button text={props.text} textColor={style.colors.secondary[3]} bgColor="#ffffff00" hoverBgColor="#ffffff00" border={style.colors.secondary[3]} hoverBorder="#ffffff80" />

export { PrimaryButton, DefaultButton, GhostButton }