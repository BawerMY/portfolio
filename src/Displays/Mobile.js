import style from "../style";
import {useState} from "react";
import Hello from "../MoblieTabs/Hello";
import {SocialLogo} from "../Components/Logos";
import AboutMe from "../MoblieTabs/AboutMe";
export default function Mobile() {
    const [tab, setTab] = useState(1)
    let lastTab = 1
    function Menu() {
        return (
            <>
                <div className={`flex-auto flex flex-col text-[${style.colors.secondary[3]}]`}>
                    <button onClick={() => setTab(1)} className={`border-b-[1px] pl-[18px] text-left py-[17px] border-[${style.colors.lines[0]}]`}>_hello</button>
                    <button onClick={() => setTab(2)} className={`border-b-[1px] pl-[18px] text-left py-[17px] border-[${style.colors.lines[0]}]`}>_about-me</button>
                    <button onClick={() => setTab(3)} className={`border-b-[1px] pl-[18px] text-left py-[17px] border-[${style.colors.lines[0]}]`}>_project</button>
                    <button onClick={() => setTab(4)} className={`border-b-[1px] pl-[18px] text-left py-[17px] border-[${style.colors.lines[0]}]`}>_contact-me</button>
                </div>
                <footer className={`flex w-full rounded-b-lg border-t-[1px] border-[${style.colors.lines[0]}]`}>
                    <div className={`flex-auto leading-[${style.leading.label}] text-[${style.font.label}] w-[146px] text-left py-[15px] pl-[22px] border-r-[1px] border-[${style.colors.lines[0]}] text-[${style.colors.secondary[0]}]`}>find me in:</div>
                    <SocialLogo onClick={() => window.location.href = "https://www.instagram.com/bawer_my/"} className={`opacity-40 hover:opacity-100 cursor-pointer px-[14px] py-[11px]`} logo="Instagram" />
                    <div className={`border-r-[1px] border-[${style.colors.lines[0]}]`}></div>
                    <SocialLogo onClick={() => window.location.href = "https://www.linkedin.com/in/bawermy/"} className={`opacity-40 hover:opacity-100 cursor-pointer px-[14px] py-[11px]`} logo="LinkedIn" />
                    <div className={`border-r-[1px] border-[${style.colors.lines[0]}]`}></div>
                    <SocialLogo onClick={() => window.location.href = "https://github.com/BawerMY/BawerMY"} className={`opacity-40 hover:opacity-100 cursor-pointer px-[14px] py-[11px]`} logo="GithubBig" />
                </footer>
            </>
        )
    }
    let tabs = [<Menu />, <Hello />, <AboutMe />]
    return (
        <div className={`w-[100vw] min-h-[100dvh] flex flex-col rounded-lg bg-[${style.colors.primary[2]}] border-[1px] border-[${style.colors.lines[0]}]`}>
            <header className={`border-b-[1px] flex justify-between items-center px-[18px] border-b-[${style.colors.lines[0]}]`}>
                <button className={`leading-[${style.leading.label}] text-[${style.font.label}] text-left pt-[17px] pb-[18px] text-[${style.colors.secondary[0]}]`}>bawer-yavuzatmaca</button>
                <button onClick={() => {if (tab === 0) {setTab(lastTab)} else {lastTab = tab; setTab(0)}}}><img src={`/imgs/${tab === 0 ? "closeMenu" : "hamburger"}.svg`} alt={tab === 0 ? "x" : "///"} /></button>
            </header>
            {tabs[tab]}
        </div>
    )
}