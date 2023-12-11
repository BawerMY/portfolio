import style from "../style";
import {useEffect, useState} from "react";

export default function AboutMe() {
    const [tabs, setTabs] = useState([])
    const [openTab, setOpenTab] = useState(null)
    const [dir1, setDir1] = useState(1)


    class Directory1 {
        constructor(icon, children) {
            this.icon = icon
            this.children = children
        }
    }
    class Directory2 {
        constructor(name, open, children) {
            this.name = name
            this.children = children
            this.open = open
        }
    }
    function Render2({dir2 ,first, last, i}) {
        const [open, setOpen] = useState(dir2.open)
        return (
            <div key={i}>
                <button onClick={() => {dir2.open = !dir2.open; setOpen(!open)}} className={`${!first ? "border-t-[1px]" : ""} ${(open && dir2.children.length > 0) || last ? "border-b-[1px]" : ""} w-full border-[${style.colors.lines[0]}] flex items-center pl-3.5 gap-[11px] py-2.5`}>
                    <img className={`${open ? "" : "-rotate-90"}`} src="/imgs/triangle.svg" alt=">" />
                    <a className={`text-[${style.font.label}] text-[${style.colors.secondary[3]}]`}>{dir2.name}</a>
                </button>
                {open && dir2.children.length !== 0 &&
                    <div className="pt-[18px] pb-[27px] flex flex-col gap-2">
                        {dir2.children.map((dir, i) => {
                            switch (dir.constructor.name) {
                                case "Directory3":
                                    return <Render3 dir3={dir} i={i}/>
                                default:
                                    return <RenderDocument doc={dir} i={i} />
                            }
                        })}
                    </div>
                }
            </div>
        )
    }
    class Directory3 {
        constructor(name, folder, open, children) {
            this.name = name
            this.folder = folder
            this.open = open
            this.children = children
        }
    }
    function Render3({dir3, i}) {
        const [open, setOpen] = useState(dir3.open)
        return (
            <div key={i}>
                <div onClick={() => {dir3.open = !dir3.open; setOpen(!open)}} className={`flex cursor-pointer pl-[17px]`}>
                    <img className={`${open ? "" : "-rotate-90"}`} src="/imgs/arrow.svg" alt=">" />
                    <img className="pl-[11px] pr-[9px]" src={`/imgs/folders/${dir3.folder}.svg`}  alt="dir/"/>
                    <a className={`text-[${style.colors.secondary[0]}]`}>{dir3.name}</a>
                </div>
                {open && dir3.children.length !== 0 &&
                    <div className="pt-[9px]">
                        {dir3.children.map(doc => <div className="pl-[27px]"><RenderDocument doc={doc} i={i} /></div>)}
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
    function RenderDocument({doc, i}) {
        return (
            <div onClick={() => {
                let temp = false
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].name === doc.name) {
                        temp = true
                        break
                    }
                }
                if (!temp) setTabs([...tabs, doc])
                setOpenTab(doc)
            }} key={i} className="pl-3.5 flex gap-2 items-center">
                <img src={`/imgs/icons/${doc.icon}.svg`} alt=""/>
                <a className={`text-[${style.colors.secondary[0]}]`}>{doc.name}</a>
            </div>
        )
    }

    function RenderBody({doc}) {
        const docs = {
            about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            high_school: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprexcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        return <div className={`pt-[18px] min-w-full w-0 px-[38px] text-[${style.colors.secondary[0]}]`}>{docs[doc.body]}</div>
    }


    let finder = [
        new Directory1("professional-info-icon", []),
        new Directory1("personal-info-icon", [
            new Directory2("personal-info", true, [
                new Directory3("bio", "bio-folder", true, [
                    new Document("about-me", "document-icon", "about_me")
                ]),
                new Directory3("interests", "interests-folder", false, []),
                new Directory3("education", "education-folder", false, [
                    new Document("high-school", "document-icon", "high_school")
                ])
            ]),
            new Directory2("contacts", true, [
                new Document("bawermy123@gmail.com", "email-icon", ""),
                new Document("+39 351 126 5059", "phone-icon", "")
            ])
        ]),
        new Directory1("hobbies-icon", [])
    ]

    function initializeTabs() {
        setTabs([finder[1].children[0].children[0].children[0]])
        setOpenTab(finder[1].children[0].children[0].children[0])

    }
    useEffect(initializeTabs, [])

    function TabRender({doc}) {
        return (
            <div onClick={() => setOpenTab(doc)} className={`flex whitespace-nowrap items-center justify-between min-w-[178px] gap-4 pl-[14px] pr-[12px] py-2.5 border-r-[1px] border-[${style.colors.lines[0]}]`}>
                <a className={`text-[${openTab && openTab.name === doc.name ? style.colors.secondary[3] : style.colors.secondary[0]}]`}>{doc.name}</a>
                <button onClick={() => {
                    let ts = []
                    for (let i = 0; i < tabs.length; i++) {
                        if (tabs[i].name !== doc.name) {
                            ts.push(tabs[i])
                        }
                        setTabs(ts)
                    }
                }}>
                    <img src="/imgs/close.svg"/>
                </button>
            </div>
        )
    }


    return (
        <div className={`flex-auto flex`}>
            <div className={`w-[311px] flex h border-r-[1px] border-[${style.colors.lines[0]}]`}>
                <div className={`flex flex-col gap-[33px] pt-[17px] border-r-[1px] px-5 border-[${style.colors.lines[0]}]`}>
                    {finder.map((dir, i) => <img key={i} onClick={() => setDir1(i)} className={dir1 === i ? "opacity-100" : "opacity-40"} src={`/imgs/icons/${dir.icon}.svg`} alt={dir.icon.slice(0, dir.icon.length - 5)} />)}
                </div>
                <div className={`flex-auto`}>
                    {finder[dir1].children.map((dir, i) => <Render2 dir2={dir} first={i === 0} last={i === finder[dir1].children.length - 1} i={i} />)}
                </div>
            </div>
            <div className={`flex-auto flex`}>
                <div className={`w-1/2 border-r-[1px] border-[${style.colors.lines[0]}]`}>
                    {tabs.length !== 0 &&
                        <div>
                            <div className={`border-b-[1px] w-full flex border-[${style.colors.lines[0]}]`}>
                                {tabs.map(tab => <TabRender doc={tab}/>)}
                            </div>
                            <div>
                                {openTab &&
                                    <RenderBody doc={openTab} />
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}