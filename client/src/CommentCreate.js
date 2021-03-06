import React, { useState } from 'react';
import axios from 'axios'

export default ({ postId }) => {
  const [content, setContent] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content
    })

    setContent('')
  }

  return <div>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="comment">New Coment</label>
      <input value={content} onChange={e => setContent(e.target.value)} className="form-control" type="text"/>
    </div>
    <button className="btn btn-primary">Submit</button>
    </form>
  </div>
}