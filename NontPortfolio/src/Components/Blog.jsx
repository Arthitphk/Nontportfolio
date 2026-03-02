import React from 'react';
import { 
  AccessTime, 
  ArrowForward, 
  Launch,
  Category
} from '@mui/icons-material';

const Blog = () => {
  // ข้อมูลของบทความ
  const blogPosts = [
    {
      id: 1,
      title: "เจาะลึกการใช้งาน React Hooks ในโปรเจกต์จริง",
      excerpt: "แชร์ประสบการณ์การใช้ useEffect และ useMemo เพื่อเพิ่มประสิทธิภาพให้เว็บแอปพลิเคชัน...",
      date: "15 พ.ค. 2024",
      readTime: "5 นาที",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "ทำไม Tailwind CSS ถึงเปลี่ยนโลกการเขียน CSS ของผม",
      excerpt: "จากคนที่เคยแอนตี้ Utility-first CSS สู่การเป็นแฟนตัวยง เพราะความเร็วและความยืดหยุ่นที่หาจากที่อื่นไม่ได้",
      date: "10 พ.ค. 2024",
      readTime: "8 นาที",
      category: "Design",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ส่วนหัวข้อ (Header Section) */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">My Writing</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            บทความและผลงานการเขียน
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            รวบรวมความรู้ ประสบการณ์ และเทคนิคต่างๆ ที่ผมได้เรียนรู้ระหว่างการทำงานในสาย Dev
          </p>
        </div>

        {/* รายการบทความ (Blog Grid) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="flex flex-col overflow-hidden rounded-2xl shadow-lg bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* รูปภาพหน้าปก */}
              <div className="flex-shrink-0 relative group">
                <img 
                  className="h-52 w-full object-cover" 
                  src={post.image} 
                  alt={post.title} 
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Launch className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 shadow-sm">
                    <Category className="mr-1" style={{ fontSize: 14 }} />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* เนื้อหาบทความ */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <AccessTime className="mr-1" style={{ fontSize: 16 }} />
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <a href={post.link} className="block mt-2">
                    <p className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </a>
                </div>

                {/* ปุ่มอ่านต่อ */}
                <div className="mt-6">
                  <a
                    href={post.link}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    อ่านเพิ่มเติม
                    <ArrowForward className="ml-1" style={{ fontSize: 16 }} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;