import { useState, useEffect } from "react"
import Links from "./Links"
const Input = () =>{
    const [shortenURl, setShortenURL] = useState([])
    const[data, setData] = useState('')
    const [url, setUrl] = useState('')
    const [empty, setEmpty] = useState(false)
    const [links, setLinks] = useState([])
    const [startAnimation, setStartAnimation] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        getShortLink()
        getLinks()
    },[url])

    const getShortLink = async () =>{
        const response =  await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`) 
        const responseData = await response.json()
        setShortenURL(responseData.result)
        console.log(response) 
        console.log(shortenURl)
        if(responseData.ok && shortenURl){
            setStartAnimation(false)
            console.log('working')
            saveLink() 
            getLinks()
        }
        if(responseData.ok && !shortenURl){
            setError(true)
            setStartAnimation(false)
        }
        
    }
    const updateData = (e) =>{
        setData(e.target.value)
        setEmpty(false)
        setError(false)
    }
    const submit = (e) =>{
        e.preventDefault()
        console.log('Submitted')
        if(data){
            setUrl(data)
            console.log(data)
            setData('')
            setStartAnimation(true)
        }else{
            console.log('empty')
            setEmpty(true)
        }
            
    }

    const saveLink = () =>{
        let links;
        if(localStorage.getItem('links') === null){
            links = []
        }else{
            links = JSON.parse(localStorage.getItem('links'))
        }
        const link = {
            original_link :shortenURl.original_link ,
            shorten_link:shortenURl.full_short_link
        } 
        links.push(link)
        localStorage.setItem('links', JSON.stringify(links))
    }
    const getLinks = () =>{
        if(localStorage.getItem('links')){
            setLinks(JSON.parse(localStorage.getItem('links')))
            console.log(links)
        }
    }
    
    

    return (
        <div className="Input">
            <form  onSubmit={submit}>
                <div className="container">
                    <input className={empty || error ? 'inputError':'inputText'}  value={data} type="text" placeholder='Shorten a link here...' onChange={updateData} />
                    {empty
                        ?(
                            <div className="error">Please add a link</div> 
                            )
                        :''
                    }{error ? (<div className='error'>Try again!</div>):''}
                    <div className="inputBtn">
                        <input type="submit" value="shorten it!"   />
                        <div className="loading" style={startAnimation ?{display:'inline-block'}:{}}></div>
                    </div>
                    
                </div>
                
            </form>
            
            <div className="links-container">
            {links.map((link, index) =>(
                <Links data={link} key={index}/>
            )) 
            }
            </div>
            
            
                
        </div>
    )
}



export default Input

