// import Card from "@components/Card"
import DSNotification from "@/components/DsNotification";

const Home: React.FC = () => {
    const arr: (string | number)[] = ["Если огонь небольшой — можно тушить самостоятельно.", "Если пламя быстро распространяется или появляется сильный дым — необходимо срочно эвакуироваться и вызвать пожарных."] ;

    return(
        <div className="Home">
            <DSNotification 
                backgroundColor="rgba(195, 71, 59, 1)"
                borderColor="white"
                textColor="white"
                list={arr}
                listMark='none'
            />
        </div>
    )
}
export default Home;