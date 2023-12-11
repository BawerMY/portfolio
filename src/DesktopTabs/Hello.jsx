import style from "../style"

export default function Hello() {
    return (
        <div className={`flex-auto flex items-center justify-between mx-[311px]`}>
            <div>
                <p className={`text-[${style.font.body}] leading-[${style.leading.body}] text-[#E5E9F0]`}>Hi all. I am</p>
                <p className={`text-[${style.font.head}] leading-[${style.leading.head}] text-[#E5E9F0]`}>Bawer MY</p>
                <p className={`text-[${style.font.sub}] leading-[${style.leading.sub}] text-[${style.colors.secondary[2]}]`}>> Fullstack developer</p>
                <div className="h-[81px]"></div>
                <div className={`flex flex-col gap-2.5`}>
                    {/*<p className={`text-[${style.font.body}] leading-[${style.leading.body}] text-[${style.colors.secondary[0]}]`}>// complete the game to continue</p>*/}
                    <p className={`text-[${style.font.body}] leading-[${style.leading.body}] text-[${style.colors.secondary[0]}]`}>// look at my Github profile</p>
                    <p className={`text-[${style.font.body}] leading-[${style.leading.body}]`}><a className={`text-[${style.colors.secondary[2]}]`}>const</a> <a className={`text-[${style.colors.accent[1]}]`}>githubLink</a> <a className={`text-[${style.colors.secondary[3]}]`}>=</a> <a href="https://github.com/BawerMY" className={`text-[${style.colors.accent[2]}] underline`}>https://github.com/BawerMY</a></p>
                </div>
            </div>
            <img className="rounded-full w-[420px]" src="/imgs/me.jpeg" alt="" />
        </div>
    )
}