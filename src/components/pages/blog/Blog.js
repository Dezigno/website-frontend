import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Blog() {
    useEffect(() => {
        fetchData();
    }, []);

    const [items, setItems] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const items = await response.json();

        console.log(items);
        setItems(items);
    }

    return (
        <div className="blogs-container">
            {
                items.map(item => (
                    <h2 key={item.id}>
                        <Link to={`/blog/${item.id}`}>{item.title}</Link>
                    </h2>
                ))
            }
        </div>
    )
};

export default Blog;