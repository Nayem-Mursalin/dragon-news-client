import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaRegBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, total_view, details, image_url, rating } = news;
    console.log(news);
    return (
        <Card className="text-center mb-5">
            <Card.Header className='d-flex justify-content-between'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={author?.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>{details.slice(0, 250) + '....'}<Link to={`/news/${_id}`}> Read More</Link></>
                            :
                            <>{details}</>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>



            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;