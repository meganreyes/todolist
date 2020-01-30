import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';

export default function TodoEntryForm( { adder }) {
  const [content, setContent] = useState('');
  function submit(e) {
    e.preventDefault();
    adder({ id: Math.random(), content });
    setContent('');
  }
  return (
    <form onSubmit={submit}>
      <input value={content} onChange={e => setContent(e.target.value)} />
    </form>
  )
}
