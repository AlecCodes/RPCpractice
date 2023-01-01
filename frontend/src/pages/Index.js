import {useLoaderData} from 'react-router-dom'

function Index(props){
    const cheeses = useLoaderData()

    return <div>
        {cheeses.map((cheese => <div key ={cheese._id}>
            <h1>{cheese.name}</h1>
            <h2>{cheese.tasty ? "It's tasty" : "Not tasty"}</h2>
        </div>))}
    </div>
}

export default Index