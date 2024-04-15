'use client';
import axios from 'axios';
import { useState } from 'react';

export default function ThreadForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:8000/api/forum', {
                title,
                content,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response:', res.data); // Log the response

            if (!res.status === 201) {
                throw new Error('Failed to create thread');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit">Create Thread</button>
        </form>
    );
}
