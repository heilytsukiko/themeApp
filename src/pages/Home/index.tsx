// import Card from "@components/Card"
import DSNotification from "@/components/DsNotification";

const Home: React.FC = () => {
    const arr: (string | number)[] = [1,2,3] ;

    return(
        <div className="Home">
            {/* передается как проп в list и массив и обозначение маркера */}
            <DSNotification backgroundColor="green" list={{list: arr, listMark: "mark"}}/>
        </div>
    )
}
export default Home;