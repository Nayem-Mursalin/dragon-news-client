import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaRegBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, total_view, details, image_url } = news;
    console.log(news);
    return (
        <Card className="text-center mb-5">
            <Card.Header className='d-flex justify-content-between'>
                <div>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={author.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 250) + '....'}<Link to={`/news/${_id}`}> Read More</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Total View: {total_view}</Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;