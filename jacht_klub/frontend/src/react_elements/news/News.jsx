export default function News({
    index,
    photo = '/src/assets/media/background.webp',
    title = 'Rejs dookoła Bałtyku',
    text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi temporibus aspernatur debitis eligendi eaque in error dolores fugit at recusandae numquam nulla, maiores similique quae alias reiciendis vero eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse rerum nihil maiores, qui, placeat in odio et mollitia voluptates obcaecati! Excepturi fugiat fuga dignissimos mollitia nam, sint tenetur cum.',
}) {
    return (
        <>
            <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16 lg:gap-24 xl:gap-32">
                    <img src={photo} alt="" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 lg:h-1/2 h-auto border-white border-[16px] mb-4 sm:mb-0" />
                    <div className="my-4 sm:my-8 flex flex-col justify-between sm:w-1/2 md:w-2/3 lg:w-3/4">
                        <h3 className="text-xl sm:text-2xl 2xl:text-5xl text-text font-bold font-jaldi">{title}</h3>
                        <p className="font-jaldi text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl whitespace-normal">{text}</p>
                        <a
                            href={`../../src/html/article.html?id=${index}`}
                            className="font-jaldi text-white bg-text rounded-r-lg rounded-l-lg w-32 text-center lg:text-lg xl:text-xl 2xl:text-2xl hover:bg-opacity-80 transition-all"
                        >
                            Czytaj dalej
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
