import React,{useState} from 'react'
import './BookItems.css'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import IconButton from '@material-ui/core/IconButton';
import ShopIcon from '@material-ui/icons/Shop';
import InfoIcon from '@material-ui/icons/Info';

function BookItems({bookName,image,author,link1,link2,link3}) {

    const [link]=useState(()=>{
        if(link2===true){
            return link2
        }else{
            return link3
        }
    })

    return (
        <div className='bookItems'>
            <div className='bookItems__top'>
                <h2>{bookName}</h2> 
            </div>
            
            <div className="bookItems__bottom">
                <p>Author: {author}</p>
            </div>

            <div className="bookItems__image">
                <img src={image} alt={bookName}/>
            </div>
            
            <div className='bookItems__options'>
                <div className='bookItems__option'>
                    <IconButton target='_blank' href={link1} style={{color:'white',fontSize:'1rem',padding:'10px 15px',borderRadius:'1px'}} >
                    <MenuBookIcon />
                    <p>Read</p>
                    </IconButton>
                </div>
                <div className='bookItems__option'>
                    <IconButton target='_blank' href={link} style={{color:'white',fontSize:'1rem'}}>
                    
                    {link2?<><ShopIcon/><p>For sale</p></>:<><InfoIcon/><p>Book Info</p></>}
                    </IconButton>
                </div>
            
            </div>
        
        </div>
    )
}

export default BookItems;
