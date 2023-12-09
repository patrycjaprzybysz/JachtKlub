export default function News({
    photo = '/src/assets/media/background.webp',
    title = 'Rejs dookoła Bałtyku',
    text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi temporibus aspernatur debitis eligendi eaque in error dolores fugit at recusandae numquam nulla, maiores similique quae alias reiciendis vero eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse rerum nihil maiores, qui, placeat in odio et mollitia voluptates obcaecati! Excepturi fugiat fuga dignissimos mollitia nam, sint tenetur cum.',
}) {
    return (
        <>
            <div className="mx-32">
                <div className="flex flex-row gap-8">
                    <img src={photo} alt="" className="h-96 border-white border-[24px]" />
                    <div className="my-8 flex flex-col justify-between">
                        <h3 className="text-3xl text-text font-bold font-jaldi">{title}</h3>
                        <p className="font-jaldi w-9/10 text-lg whitespace-normal">{text}</p>
                        <a
                href="../../src/html/article.html"
                className="font-jaldi text-white bg-text rounded-r-lg rounded-l-lg w-32 text-center lg:text-lg xl:text-xl 2xl:text-2xl "
              >
                Czytaj dalej
              </a>
                    </div>
                </div>
            </div>
        </>
    );
}
