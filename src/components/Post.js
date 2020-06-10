import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title }) => (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        {title}
    </li>
);

Post.propTypes = {
    title: PropTypes.string.isRequired
};

export default Post;