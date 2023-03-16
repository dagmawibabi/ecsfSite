import headerImage from '../assets/images/logo.png';

export const UpcomingEvents = () => {
    let events = [
        {
            "title": "Supermacy of Christ",
            "subtitle": "Music Worship",
            "backdropImage": require("../assets/images/events1.png"),
        },
        {
            "title": "Supermacy of Christ",
            "subtitle": "Music Worship",
            "backdropImage": require("../assets/images/events2.png"),
        },
        {
            "title": "Supermacy of Christ",
            "subtitle": "Music Worship",
            "backdropImage": require("../assets/images/events3.png"),
        },
        {
            "title": "Supermacy of Christ",
            "subtitle": "Music Worship",
            "backdropImage": require("../assets/images/events4.png"),
        },
        {
            "title": "Supermacy of Christ",
            "subtitle": "Music Worship",
            "backdropImage": require("../assets/images/events5.png"),
        },
    ];
    return (
        <div className="h-fit text-white bg-repeat-y bg-contain "  style={{"backgroundImage": `url(${headerImage})`}}>
            <div className='bg-black bg-opacity-75'>
                <div className=" py-10">
                    <span className="text-4xl px-20"> Upcoming Events </span>

                </div>
                <div className="flex justify-evenly">
                    {
                        events.map((content, index) => {
                            return (
                                <div className="h-96 w-72 bottom-2 relative bg-gradient-to-t from-black to-transparent" style={{"backgroundImage": `url(${content["backdropImage"]})`}} >
                                    <div className="px-4 block py-2 bg-slate-700 absolute left-0 right-0 bottom-0">
                                        <span className="font-bold text-lg"> {content["title"]} </span> <br/>
                                        <span> {content["subtitle"]} </span>
                                    </div>
                                </div>
                            ) 
                        }) 
                    }
                </div>
            </div>
        </div>
    )
}