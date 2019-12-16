import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { addComment } from '../../actions/post';

const CommnetForm = ({ postId, addComment }) => {
    const [text, setText] = useState('');
    return (
        <div className="post-form">
            <div className="post-form-header bg-primary">
                <h3>Leave a Comment</h3>
            </div>
            <form
                className="form my-1"
                onSubmit={e => {
                    e.preventDefault();
                    addComment(postId, { text });
                    setText('');
                }}
            >
                <textarea
                    name="text"
                    placeholder="Create a post"
                    cols="30"
                    rows="5"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    required
                ></textarea>
                <input type="submit" className="btn btn-dark my-1" value="Submit" />
            </form>
        </div>
    );
};

CommnetForm.propTypes = {
    addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommnetForm);
