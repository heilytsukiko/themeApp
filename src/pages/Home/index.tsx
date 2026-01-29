// import Card from "@components/Card"
import DSNotification from "@/components/DsNotification";
import './style.css'

const Home: React.FC = () => {
    const arr1: (string | number)[] = ["Если огонь небольшой — можно тушить самостоятельно.", "Если пламя быстро распространяется или появляется сильный дым — необходимо срочно эвакуироваться и вызвать пожарных."] ;
    const text: string = "Огонь распространяется стремительно, особенно по легковоспламеняющимся материалам, и может за минуты охватить всё помещение.";
    const arr2: (string | number)[] = [
        "Нельзя паниковать — хаотичные действия только мешают спасению.",
        "Нельзя возвращаться за вещами — главное сохранить жизнь.",
        "Нельзя самостоятельно тушить крупный пожар, если пламя уже распространилось — нужно срочно эвакуироваться.",
        "Нельзя открывать окна и двери без необходимости — это усиливает приток кислорода и раздувает пламя."
    ];
    return(
        <div className="Home">
            <DSNotification 
                content={arr1}
                listMark="none"
                cardWidth="middle"
                borderColor="white"
                textColor="white"
                borderRadius="25px"
                fontSize="14px"
                iconSize="62px"
                padding="15px"
                cardGap="27px"
                imgPosition="flex-start"
                backgroundColor="rgba(195, 71, 59, 1)"
            />

            <DSNotification
                content={text}
                cardWidth="small"
                borderColor="white"
                textColor="white"
                borderRadius="25px"
                fontSize="14px"
                iconSize="45px"
                padding="15px 25px"
                cardGap="10px"
                backgroundColor="rgba(195, 71, 59, 1)"
            />
            <DSNotification
                content={arr2}
                listMark="mark"
                cardWidth="large"
                borderColor="white"
                textColor="white"
                borderRadius="25px"
                iconSize="46px"
                padding="25px 26px 25px 16px"
                cardGap="24px"
                imgPosition="flex-start"
                backgroundColor="rgba(195, 71, 59, 1)"
            />
        </div>
    )
}
export default Home;