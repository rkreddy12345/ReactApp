const Shimmer = () => {
    return <div className="restaurant-list">
        {Array(16).fill("").map(
            //index is bad key, just for quick start
            (e, index) => <div key={index} className="shimmer-card"></div>
        )}


    </div>
}

export default Shimmer;