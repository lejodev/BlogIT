import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PostCard from '../components/PostCard';

const BlogsCarousel = ({ blogs }) => {
  return (
    <Carousel>
      {blogs.data.map((blog, index) => (
        <Carousel.Item key={index}>
          <PostCard post={blog} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BlogsCarousel;
