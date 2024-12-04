import style from "../style";
import {useEffect, useState} from "react";
import {SocialLogo} from "../Components/Logos";
import docs from "../docs";

export default function AboutMe() {
    const [openDoc, setOpenDoc] = useState(false)
    class Directory1 {
        constructor(name, open, children) {
            this.name = name
            this.open = open
            this.children = children
        }
    }

    function Render1({dir, i}) {
        const [open, setOpen] = useState(dir.open)
        return (
            <div>
                <button key={i} onClick={() => {dir.open = !dir.open; setOpen(!open)}} className={`w-full bg-[${style.colors.lines[0]}] flex items-center pl-[28px] py-[5px] gap-[11px]`}>
                    <img className={`${open ? "" : "-rotate-90"}`} src="/imgs/triangle.svg" alt=">" />
                    <a className={`text-[${style.font.label}] text-[${style.colors.secondary[3]}]`}>{dir.name}</a>
                </button>
                {open && dir.children.length !== 0 &&
                    <div className={`pt-[16px] pb-[13px] pl-[9px] flex flex-col gap-2`}>
                        {dir.children.map((dir2, i) => dir2.constructor.name === "Directory2" ? <Render2 dir={dir2} i={i} /> : <RenderDocument doc={dir2} i={i} />)}
                    </div>
                }
            </div>

        )
    }

    class Directory2 {
        constructor(name, folder, open, children) {
            this.name = name
            this.folder = folder
            this.open = open
            this.children = children
        }
    }

    function Render2({dir, i}) {
        const [open, setOpen] = useState(dir.open)
        return (
            <div key={i}>
                <div onClick={() => {dir.open = !dir.open; setOpen(!open)}} className={`flex cursor-pointer pl-[17px]`}>
                    <img className={`${open ? "" : "-rotate-90"}`} src="/imgs/arrow.svg" alt=">" />
                    <img className="pl-[11px] pr-[9px]" src={`/imgs/folders/${dir.folder}.svg`}  alt="dir/"/>
                    <a className={`text-[${style.colors.secondary[0]}]`}>{dir.name}</a>
                </div>
                {open && dir.children.length !== 0 &&
                    <div className={`gap-2 pt-2`}>
                        {dir.children.map(doc => <div className="pl-[17px]"><RenderDocument doc={doc} i={i} /></div>)}
                    </div>
                }
            </div>
        )
    }
    class Document {
        constructor(name, icon, body) {
            this.name = name
            this.icon = icon
            this.body = body
        }
    }

    function RenderBody({doc}) {
        // return <div className={`min-w-full w-0 text-[${style.colors.secondary[0]}]`}>{docs[doc.body]}</div>
        return "shit"

    }

    function RenderDocument({doc, i}) {
        return (
            <div onClick={() => setOpenDoc(doc)} key={i} className={`pl-6 flex w-full gap-2 items-center`}>
                <img src={`/imgs/icons/${doc.icon}.svg`} alt=""/>
                <a className={`text-[${style.colors.secondary[0]}]`}>{doc.name}</a>
            </div>
        )
    }

    let finder = [
        new Directory1("personal-info", true, [
            new Directory2("bio", "bio-folder", true, [
                new Document("_about-me", "document-icon", "about_me")
            ]),
            new Directory2("interests", "interests-folder", false, []),
            new Directory2("education", "education-folder", false, [
                new Document("high-school", "document-icon", "high_school")
            ]),
        ]),
        new Directory1("professional-info", false, []),
        new Directory1("hobbies", false, []),
        new Directory1("contacts", false, [
            new Document("bawermy123@gmail.com", "email-icon", "email"),
            new Document("+39 351 407 2169", "phone-icon", "phone")
        ]),
    ]

    useEffect(() => {
        setOpenDoc(finder[0].children[0].children[0])
    }, [])
    return (
        <div className={`flex flex-auto flex-col`}>
            <div className={`text-[${style.colors.secondary[3]}] text-[${style.font.code}] mt-[21px] mb-[29px] ml-[27px]`}>
                _about-me
            </div>
            <div className={`flex flex-col gap-[3px]`}>
                {finder.map((dir1, i) => <Render1 dir={dir1} i={i} />)}
            </div>
            <div className={`flex-auto items-start px-[27px] flex flex-col gap-[17px] py-[38px]`}>
                <div className={`text-[${style.colors.secondary[3]}]`}>// {openDoc.name}</div>
                {openDoc && <RenderBody doc={openDoc} />}
            </div>
            <footer className={`flex w-full rounded-b-lg border-t-[1px] border-[${style.colors.lines[0]}]`}>
                <div className={`flex-auto leading-[${style.leading.label}] text-[${style.font.label}] w-[146px] text-left py-[15px] pl-[22px] border-r-[1px] border-[${style.colors.lines[0]}] text-[${style.colors.secondary[0]}]`}>find me in:</div>
                <SocialLogo onClick={() => window.location.href = "https://www.instagram.com/bawer_my/"} className={`opacity-40 hover:opacity-100 cursor-pointer px-[14px] py-[11px]`} logo="Instagram" />
                <div className={`border-r-[1px] border-[${style.colors.lines[0]}]`}></div>
                <SocialLogo onClick={() => window.location.href = "https://www.linkedin.com/in/bawermy/"} className={`opacity-40 hover:opacity-100 cursor-pointer px-[14px] py-[11px]`} logo="LinkedIn" />
                <div className={`border-r-[1px] border-[${style.colors.lines[0]}]`}></div>
                <SocialLogo onClick={() => window.location.href = "https://github.com/BawerMY/BawerMY"} className={`opacity-40 hover:opacity-100 cursor-pointer px-[14px] py-[11px]`} logo="GithubBig" />
            </footer>
        </div>
    )
}