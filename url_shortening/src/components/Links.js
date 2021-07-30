import React from 'react'
import { useRef, useState} from 'react'
const Links = ({data}) => {
    const copyLink = useRef(null) 
    const DarkVioletcolor = 'hsl(257,27%,26%)';
    
    const [copied, setCopied] = useState(false)
    const copy = (e) =>{
        setCopied(true)
        // navigator.clipboard.writeText(copyLink.current)
        copyLink.current.select()
        copyLink.current.setSelectionRange(0,9999)
        document.execCommand('copy')
        e.target.focus()
    }
    return (
        <div className='Links'>
            <ul>
                <li className='link'>
                    <div className='originalLink'>{data.original_link}</div> 
                    <div className='right_links' >
                        <input className=' newLink' ref={copyLink} value={data.shorten_link}/>
                        <input className='copyBtn' style={copied ? {backgroundColor:DarkVioletcolor} :{}} type="button" value={copied ? 'Copied !' : 'Copy'} onClick={copy}/>
                    </div>
                    
                </li>
            </ul>
        </div>
    )
}

export default Links
