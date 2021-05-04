import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './blog.css'
import { FaUserCircle } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'


function Blog() {
    useEffect(() => {
        fetchData();
    }, []);

    const [items, setItems] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const items = await response.json();

        console.log(items);
        setItems(items.filter(item => (item.id < 10)));
    }

    return (
        <div className="blogs-container">
            <div className="blog-header">
                <h1>بلاگ دزیگنو</h1>
            </div>
            <div className="blog-contents">
                <div className="slide">
                    <h1>blog</h1>
                </div>
                <div className="contents-container">
                    {
                        items.map(item => (
                            <div className="post-box" key={item.id}>
                                <div className="post-title-container">
                                    <div className="post-title">
                                        <Link className="post-link" to={`/blog/${item.id}`}>
                                            <h1 className="post-title-text">
                                                {item.title}
                                            </h1>
                                        </Link>
                                    </div>
                                </div>
                                <div className="blog-details">
                                    <div className="blog-author">
                                        <FaUserCircle style={{fontSize: "18px"}} />
                                        <h4 style={{marginRight: "4px"}}>نوید قاسمی</h4>
                                    </div>
                                    <div className="blog-date-category">
                                        <div className="blog-date">
                                            <MdDateRange style={{fontSize: "18px"}}/>
                                            <h3>13 apr 2020</h3>
                                        </div>
                                        <div className="blog-category">
                                            <BsReverseLayoutTextSidebarReverse style={{fontSize: "18px"}}/>
                                            <h3>کتوری بلاگ</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-img-container">
                                    <Link className="post-img-link" to={`/blog/${item.id}`}>
                                        <img src={item.url} alt={`post ${item.id} entry img`} style={{maxHeight: "400px"}}/>
                                    </Link>
                                </div>
                                <div className="post-body-candidate-container">
                                    <div className="post-body-candidate">
                                        <p>
                                        {/* DEBUG */}
                                        پروتکل SSL/TLS چیست؟ پروتکل TLS (Transport Layer Security) تضمین‌کننده‌ی برقراری ارتباطی امن و رمزنگاری شده میان کلاینت و سرور در یک شبکه‌ی کامپیوتری است. این پروتکل رمزنگاری در ارتباطات مختلفی مانند ایمیل‌ها – پیام‌رسان‌ها و … مورد استفاده قرار می‌گیرد. یکی از کاربردهای عمده‌ی آن در ارتباط وب میان بازدیدکننده
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Blog;
