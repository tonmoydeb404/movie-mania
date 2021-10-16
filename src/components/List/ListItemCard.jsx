/* eslint-disable no-nested-ternary */
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PropTypes from 'prop-types';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ItemCard from '../Card/ItemCard';
import ItemCardSkeleton from '../Skeleton/ItemCardSkeleton';

const ListItemCard = ({ data, loading, error, infinity, loader, next, increasePage, name }) => {
    if (!data.length && !loading && error) {
        return <div className="info">There Is An Error</div>;
    }

    if (!data.length && !loading && !error) {
        return <div className="info"> There Is No Data</div>;
    }

    if (data.length) {
        return (
            <>
                {infinity ? (
                    <InfiniteScroll
                        className="grid"
                        dataLength={data.length}
                        next={increasePage}
                        hasMore={next}
                        loader={<div className="info">loading...</div>}
                        endMessage={
                            <div className="info">
                                <b>
                                    Yay! You have seen it all <EmojiEmotionsIcon />{' '}
                                </b>
                            </div>
                        }
                    >
                        {data.length &&
                            data.map((item) => (
                                <ItemCard
                                    key={item.id}
                                    title={name === 'movie' ? item.title : item.original_name}
                                    text={
                                        name === 'person'
                                            ? item.character
                                            : name === 'movie'
                                            ? item.release_date
                                            : item.first_air_date
                                    }
                                    poster={
                                        name === 'person' ? item.profile_path : item.poster_path
                                    }
                                    rating={name === 'person' ? null : item.vote_average}
                                    to={name === 'person' ? null : `/${name}/${item.id}`}
                                />
                            ))}
                    </InfiniteScroll>
                ) : (
                    <>
                        {data.length &&
                            data.map((item) => (
                                <ItemCard
                                    key={item.id}
                                    title={name === 'movie' ? item.title : item.original_name}
                                    text={
                                        name === 'person'
                                            ? item.character
                                            : name === 'movie'
                                            ? item.release_date
                                            : item.first_air_date
                                    }
                                    poster={
                                        name === 'person' ? item.profile_path : item.poster_path
                                    }
                                    rating={name === 'person' ? null : item.vote_average}
                                    to={name === 'person' ? null : `/${name}/${item.id}`}
                                />
                            ))}
                    </>
                )}
            </>
        );
    }

    // LOADING
    return (
        <>
            {infinity ? (
                <div className="grid">
                    {Array.from(Array(loader)).map((_, index) => (
                        <ItemCardSkeleton key={index} style={{ width: '100%' }} />
                    ))}
                </div>
            ) : (
                Array.from(Array(loader)).map((_, index) => (
                    <ItemCardSkeleton key={index} style={{ width: '100%' }} />
                ))
            )}
        </>
    );
};

ListItemCard.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    infinity: PropTypes.bool.isRequired,
    loader: PropTypes.number.isRequired,
    next: PropTypes.bool.isRequired,
    increasePage: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default ListItemCard;
