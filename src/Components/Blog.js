// Blog.js
import React from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Understanding Anxiety and Coping Strategies',
      content: 'Anxiety is a common response to stress, characterized by excessive worry and physical symptoms. Recognizing triggers is essential for effective management.',
      author: 'John Doe',
      date: 'February 18, 2024',
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.kiHODUAWB1ep69IpD7VLhwHaD4&pid=Api&P=0&h=220', // Replace with a real image URL
    },
    {
      title: 'The Power of Positive Thinking in Daily Life',
      content: 'Positive thinking is a transformative mindset that can significantly impact our daily lives. Embracing optimism can lead to improved mental well-being, enhanced resilience, and a more fulfilling existence.',
      date: 'February 19, 2024',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.Zq886IOPtxy_S1yTH3mxgQHaEx&pid=Api&P=0&h=220', // Replace with a real image URL
    },
    {
        title: 'The Importance of Regular Exercise for Mental Health',
        content: 'Regular exercise has been shown to have numerous benefits for mental health. It not only helps in reducing stress and anxiety but also improves mood and cognitive function. In this blog post, we explore the connection between physical activity and mental well-being, providing insights into how incorporating exercise into your routine can positively impact your mental health.',
        author: 'Emily Johnson',
        date: 'February 20, 2024',
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP._BnpEwiPmJQGVXLoqJ1SGAHaE8&pid=Api&P=0&h=220', // Replace with a real image URL
      },
      {
        title: 'Exploring Mindfulness Meditation Techniques',
        content: 'Mindfulness meditation is a powerful practice for cultivating a present-moment awareness that can lead to a calmer and more focused mind. In this blog post, we delve into various mindfulness meditation techniques, offering practical tips and guidance for those looking to incorporate mindfulness into their daily lives.',
        author: 'Alexa Turner',
        date: 'February 21, 2024',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.ob04WUajKpHZ4ySD8-g_twHaE3&pid=Api&P=0&h=220', // Replace with a real image URL
      },

  ];

  return (
    <section className="blog-section">
      <h2>Latest Blog Posts</h2>
      {blogPosts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} author={post.author} date={post.date} imageUrl={post.imageUrl} />
      ))}
    </section>
  );
};

export default Blog;

