import { connect } from 'react-redux';
import PostList from '../components/PostList';

const mapStateToProps = state => {
    return {
        postList: state.postList
    };
};

const PostListContainer = connect(mapStateToProps)(PostList);

export default PostListContainer;