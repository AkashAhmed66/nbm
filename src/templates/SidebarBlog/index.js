import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/Sidebar/SidebarItem";
import List from "../../components/UI/List";
import LI from "../../components/UI/List/Item";
import Anchor from "../../components/UI/Anchor";  
import Blogs from "../../data/Blog/blog";
import Categories from "../../data/Sidebar/sidebar"; 
import RecentBlogPost from "../../components/RecentBlogPost";
 

const SidebarBlog = ( ) => {
    return (
        <Sidebar classes="col-md-4 col-sm-12 widget-area">

            {/* Search Form */}
            <SidebarItem classes={'widget widget-search'}>
                {/* input-group */}
                <div className="input-group">
                    <input className="form-control" placeholder="Search" type="text" />
                    <span className="input-group-btn">
                        <button type="button"><i className="fa fa-search"></i></button>
                    </span>
                </div> 
            </SidebarItem>

            {/* Recent Posts */}
            <SidebarItem title={'Recent Posts'} classes={'widget wiget-recent-post'}> 
                {
                    Blogs.reverse().slice(0,3).map(post=>(
                        <RecentBlogPost key={post.id} id={post.id} title={post.title} publishDate={post.publishDate} thumb={post.thumb} />
                    ))
                } 
            </SidebarItem>

            {/* Post Categories */}
            <SidebarItem title={'Post Categories'} classes={'widget widget-post-categories'}>
                <List classes={'categories-type'}>
                    {
                        Categories.categories.map(category=>(
                            <LI key={category.id}><Anchor path={category.catLink}>{category.categoryName}</Anchor></LI>
                        ))
                    }
                </List>
            </SidebarItem>

            {/* Instagram Gallery*/}
            <SidebarItem title={'Instagram'} classes={'widget widget-instagram'}> 
                <div className="instagram-item">
                    <ul className="instagram-photo-list">
                        <li><img src={process.env.PUBLIC_URL + '/assets/images/blog_1.jpg'} alt="Instagram"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/assets/images/blog_2.jpg'} alt="Instagram"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/assets/images/blog_3.jpg'} alt="Instagram"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/assets/images/blog_2.jpg'} alt="Instagram"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/assets/images/blog_3.jpg'} alt="Instagram"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/assets/images/blog_1.jpg'} alt="Instagram"/></li>
                    </ul>
                </div>
            </SidebarItem>

            {/* Top Tags*/}
            <SidebarItem title={'Top Tags'} classes={'widget widget-tags'}> 
 
                {
                    Blogs.map((tags, i)=>( 
                        <Link key={i} to={`${process.env.PUBLIC_URL + `/blog/${tags.title.split(' ').join('-').toLowerCase()}?id=${tags.id}`}`}> 
                            {tags.tag}
                        </Link>
                    ))
                }

            </SidebarItem>

 
        </Sidebar>
    );
};

export default SidebarBlog;