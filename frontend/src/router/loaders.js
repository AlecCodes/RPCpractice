import URL from './url'
export const indexLoader = async() => {
    const response = await fetch(URL+"/cheese") 
    console.log(response)
    const cheeses = await response.json()
    console.log(cheeses)
    return cheeses
}