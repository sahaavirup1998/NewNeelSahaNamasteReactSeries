import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import RestrurantCard from "./RestrurantCard";
// import resList from "../utils/api_data"


const Body = () => {

    const [listOfRestrurant, setListOfRestrurant] = useState([]);
    const [fliteringRestrurant, setFilteringRestrurant] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0411832&lng=77.6124416&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);

        setListOfRestrurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteringRestrurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div className="body">
            <div className="search_bar">
                <input type="text" value={search} onChange={(e) => {setSearch(e.target.value)}} />
                <button className="search_btn" onClick = {() => {
                    const searchedList = listOfRestrurant.filter(
                        (res) => res.info.name.toLowerCase().includes(search.toLowerCase()));
                        setFilteringRestrurant(searchedList)
                }}>Search</button>
            </div>
            <div className="restrurant_container">
                {/* <RestrurantCard resData = {resList[0]}/>
                <RestrurantCard resData = {resList[1]}/>
                <RestrurantCard resData = {resList[2]}/>
                <RestrurantCard resData = {resList[3]}/>
                <RestrurantCard resData = {resList[4]}/>
                <RestrurantCard resData = {resList[5]}/>
                <RestrurantCard resData = {resList[6]}/>
                <RestrurantCard resData = {resList[7]}/>
                <RestrurantCard resData = {resList[8]}/>
                <RestrurantCard resData = {resList[9]}/>
                <RestrurantCard resData = {resList[10]}/>
                <RestrurantCard resData = {resList[11]}/>
                <RestrurantCard resData = {resList[12]}/>
                <RestrurantCard resData = {resList[13]}/>
                <RestrurantCard resData = {resList[14]}/> */}

                {/* using map function */}
                {
                    fliteringRestrurant.map((restaurant) => <RestrurantCard key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
            <div className="filter_btn">
                <button onClick={() => {
                    const filteredList = listOfRestrurant.filter(
                        (res) => res.info.avgRating>4
                    );
                    setListOfRestrurant(filteredList);
                    console.log(filteredList)
                }}>Top Rated Restrurant</button>
            </div>
        </div>
    )
}

export default Body;