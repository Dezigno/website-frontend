import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './blog.css'
import { FaUserCircle } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { scrollAction, routeAction } from '../../../actions';
import pars from 'html-react-parser';

function Blog() {

    const scrollState = useSelector(state => state.scroll)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchData();
        dispatch(routeAction())
        console.log(scrollState)
    }, []);

    const [items, setItems] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://api.dezigno.ir/blog/");
        const items = await response.json();

        console.log(items);
        // setItems(items.filter(item => (item.id < 10)));
        setItems(items);
        console.log(items)
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
                                        <Link className="post-link" to={`/blog/post/${item.id}-${item.slug}`}>
                                            <h1 className="post-title-text">
                                                {item.title}
                                            </h1>
                                        </Link>
                                    </div>
                                </div>
                                <div className="blog-details">
                                    <div className="blog-author">
                                        <FaUserCircle style={{fontSize: "18px"}} />
                                        <h4 style={{marginRight: "4px"}}>{item.author}</h4>
                                    </div>
                                    <div className="blog-date-category">
                                        <div className="blog-date">
                                            <MdDateRange style={{fontSize: "18px"}}/>
                                            <h3>{item.datetime}</h3>
                                        </div>
                                        <div className="blog-category">
                                            <BsReverseLayoutTextSidebarReverse style={{fontSize: "18px"}}/>
                                            {
                                                item.category.map(cat => (
                                                    <Link className="category-link">
                                                        <h3>
                                                            {cat}
                                                        </h3>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="post-img-container">
                                    <Link className="post-img-link" to={`/blog/post/${item.id}-${item.slug}`}>
                                        <img src={`https://api.dezigno.ir${item.entry_img}`} alt={`post ${item.slug} entry img`} style={{maxHeight: "400px"}}/>
                                    </Link>
                                </div>
                                <div className="post-body-candidate-container">
                                    <div className="post-body-candidate" >
                                        {pars(item.entry_text)}
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
