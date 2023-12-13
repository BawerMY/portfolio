import style from "../style";

export default function Hello() {
    return (
        <div className={`flex-auto flex flex-col justify-between mt-[35%] mb-[32%] px-[27px]`}>
            <div>
                <p className={`text-[${style.font.body}] mb-2.5 leading-[${style.leading.body}] text-[#E5E9F0]`}>Hi all. I am</p>
                <p className={`text-[${style.font.head}] mb-[5px] leading-[${style.leading.head}] text-[#E5E9F0]`}>Bawer MY</p>
                <p className={`text-[20px}] leading-[${style.leading.sub}] text-[${style.colors.accent[1]}]`}>> Fullstack developer</p>
                <div className="h-[81px]"></div>
            </div>
            <div className={`flex flex-col gap-2.5`}>
                <p className={`text-[${style.font.body}] leading-[${style.leading.body}] text-[${style.colors.secondary[0]}] mb-4`}>// find my profile on Github:</p>
                <p className={`text-[${style.font.body}] flex flex-wrap gap-3 leading-[${style.leading.body}]`}><a className={`text-[${style.colors.secondary[2]}]`}>const</a> <a className={`text-[${style.colors.accent[1]}]`}>githubLink</a> <a className={`text-[${style.colors.secondary[3]}]`}>=</a> <a href="https://github.com/BawerMY" className={`text-[${style.colors.accent[2]}] underline`}>https://</a><a href="https://github.com/BawerMY" className={`text-[${style.colors.accent[2]}] underline`}>github.com/BawerMY</a></p>
            </div>
        </div>
    )
}