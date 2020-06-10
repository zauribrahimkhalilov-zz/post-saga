import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ postList }) => (
    <div className="list-group">
        {postList.map((post, index) => (
            <Post key={index} {...post} />
        ))}
    </div>
);

PostList.propTypes = {
    postList: PropTypes.arrayOf(
        PropTypes.shape({
            userId: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default PostList;