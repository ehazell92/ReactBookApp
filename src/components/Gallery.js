import React, {Component} from 'react';


class Gallery extends Component {
    render(){
        let alternate = 'http://www.lombez-gers.com/photos-lombez/commun/noPicture.png';
        return (
            <div>{
                    this.props.items.map((item, index) =>{
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <a 
                                key={index} 
                                className="book"
                                href={infoLink}
                                target="_blank"
                            >
                                <img 
                                    src={imageLinks !== undefined ? imageLinks.thumbnail : alternate} 
                                    alt="bookImage"
                                    className="book-img"
                                />
                                <div className="book-text">{title}</div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}
export default Gallery;