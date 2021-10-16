import React from 'react';
import { Link } from 'react-router-dom';
import {
    CARD,
    CARDCONTENT,
    CARDMEDIA,
    H2,
    P,
    RATINGWRAPPER
} from '../../assets/styles/ItemCard.styles';
import Rating from '../Rating';

const ItemCard = ({ title, text, poster, rating, to }) => (
    <CARD>
        {to ? (
            <Link to={to}>
                <CARDMEDIA
                    component="img"
                    height="200px"
                    image={
                        poster
                            ? `https://image.tmdb.org/t/p/w200/${poster}`
                            : 'https://via.placeholder.com/150x200?text=image+not+found'
                    }
                    alt={title}
                />
            </Link>
        ) : (
            <CARDMEDIA
                component="img"
                height="200px"
                image={
                    poster
                        ? `https://image.tmdb.org/t/p/w200/${poster}`
                        : 'https://via.placeholder.com/150x200?text=image+not+found'
                }
                alt={title}
            />
        )}

        <CARDCONTENT>
            {to ? (
                <Link to={to}>
                    <H2 gutterBottom variant="h6" component="h2">
                        {title}
                    </H2>
                </Link>
            ) : (
                <H2 gutterBottom variant="h6" component="h2">
                    {title}
                </H2>
            )}

            <P variant="body2" color="text.secondary">
                {text}
            </P>

            {rating && (
                <RATINGWRAPPER>
                    <Rating rate={rating * 10} />
                </RATINGWRAPPER>
            )}
        </CARDCONTENT>
    </CARD>
);

export default ItemCard;
