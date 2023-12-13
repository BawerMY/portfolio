import style from "./style";
import { useState } from "react";
import { SocialLogo } from "./Logos";
import Hello from "./DesktopTabs/Hello";
import AboutMe from "./DesktopTabs/AboutMe";
import Projects from "./DesktopTabs/Projects";
import ContactMe from "./DesktopTabs/ContactMe";

export default function Desktop() {
    const [tab, setTab] = useState(0)
    const tabs = [Hello(), AboutMe(), Projects(), ContactMe()]
    return (
        <div className={`w-[100vw] h-[100vh] flex flex-col rounded-lg bg-[${style.colors.primary[2]}] border-[1px] border-[${style.colors.lines[0]}]`}>
            <header className={`w-full flex justify-between rounded-t-lg border-b-[1px] border-[${style.colors.lines[0]}]`}>
                <div className="flex">
                    <button className={`leading-[${style.leading.label}] text-[${style.font.label}] w-[311px] text-left py-[17px] pl-[22px] border-r-[1px] border-[${style.colors.lines[0]}] text-[${style.colors.secondary[0]}]`}>bawer-yavuzatmaca</button>
                    <button onClick={() => {setTab(0)}} className={`${tab === 0 ? `leading-[${style.leading.label}] text-[${style.font.label}] border-b-[${style.colors.accent[0]}] border-b-[3px] pb-[14px]` : ""} text-left py-[17px] px-[31px] text-[${style.colors.secondary[0]}]`}>_hello</button>
                    <div className={`border-r-[1px] border-[${style.colors.lines[0]}]`}></div>
                    <button onClick={() => {setTab(1)}} className={`${tab === 1 ? `leading-[${style.leading.label}] text-[${style.font.label}] border-b-[${style.colors.accent[0]}] border-b-[3px] pb-[14px]` : ""} text-left py-[17px] px-[31px] text-[${style.colors.secondary[0]}]`}>_about-me</button>
                    <div className={`border-r-[1px] border-[${style.colors.lines[0]}]`}></div>
                    <button onClick={() => {setTab(2)}} className={`${tab === 2 ? `leading-[${style.leading.label}] text-[${style.font.label}] border-b-[${style.colors.accent[0]}] border-b-[3px] pb-[14px]` : ""} text-left py-[17px] px-[31px] text-[${style.colors.secondary[0]}]`}>_projects</button>
                    <div className={`border-r-[1px] border-[${style.colors.lines[0]}]`}></div>
                </div>
                <button onClick={() => {setTab(3)}} className={`${tab === 3 ? `leading-[${style.leading.label}] text-[${style.font.label}] border-b-[${style.colors.accent[0]}] border-b-[3px] pb-[14px]` : ""} py-[17px] px-[23px] border-l-[1px] border-l-[${style.colors.lines[0]}] text-[${style.colors.secondary[0]}]`}>_contact-me</button>
            </header>
            {tabs[tab]}
            <footer className={`w-full flex justify-between rounded-b-lg border-t-[1px] border-[${style.colors.lines[0]}]`}>
                <div className="flex">
                    <button className={`leading-[${style.leading.label}] text-[${style.font.label}] w-[146px] text-left py-[15px] pl-[22px] border-r-[1px] border-[${style.colors.lines[0]}] text-[${style.colors.secondary[0]}]`}>find me in:</button>
                    <SocialLogo onClick={() => window.location.href = "https://www.instagram.com/bawer_my/"} className={`opacity-40 hover:opacity-100 cursor-pointer px-[14px] py-[11px]`} logo="Instagram" />
                    <div className={`border-r-[1px] border-[${style.colors.lines[0]}]`}></div>
                    <SocialLogo onClick={() => window.location.href = "https://www.linkedin.com/in/bawermy/"} className={`opacity-40 hover:opacity-100 cursor-pointer px-[14px] py-[11px]`} logo="LinkedIn" />
                    <div className={`border-r-[1px] border-[${style.colors.lines[0]}]`}></div>
                </div>
                    <button onClick={() => window.location.href = "https://github.com/BawerMY"} className={`border-l-[1px] border-l-[${style.colors.lines[0]}] text-[${style.colors.secondary[0]}] flex gap-[5px] items-center pl-[23px] pr-[22px]`}><a>@BawerMY</a> <SocialLogo logo="GithubBig" /></button>
            </footer>
        </div>
    )
}