import React from 'react';
import { 
  AccessTime, 
  ArrowForward, 
  Launch,
  Category
} from '@mui/icons-material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';






const Blog = () => {
  // ข้อมูลของบทความ
  const blogPosts = [
    {
      id: 1,
      title: "เจาะลึกการใช้งาน Grid System ใน Bootstrap",
      excerpt: "Bootstrap เป็น Framework ที่ใช้สำหรับสร้าง Responsive Website โดยที่เราไม่ต้องไปยุ่งกับ CSS กับ JavaScript เพราะใน Bootstrap ออกแบบมาให้แล้ว ช่วยลดเวลาในการทำ Components ต่าง ๆ",
      date: "15 พ.ค. 2024",
      readTime: "1,919",
      category: "Design",
      image: "https://www.borntodev.com/wp-content/uploads/2024/04/bootstrap-grid-blog-scaled.webp",
      link: "https://www.borntodev.com/2024/04/25/grid-system-%E0%B9%83%E0%B8%99-bootstrap/"
    },
    {
      id: 2,
      title: "ทำไม Tailwind CSS ถึงเปลี่ยนโลกการเขียน CSS ของผม",
      excerpt: "TailwindCSS เป็น CSS framework ตัวหนึ่งที่ใช้งานแบบ Utility-First แต่ละ Class จะมีคุณสมบัติย่อย ๆ ของ CSS เช่น Color, Spacing, Typography, Shadows โดยนำไปใช้ได้เลยและไม่ต้องสร้างชื่อ Class",
      date: "10 พ.ค. 2024",
      readTime: "1,301",
      category: "Design",
      image: "https://www.borntodev.com/wp-content/uploads/2024/04/tailwind-card-fb-jpg.webp",
      link: "#"
    }
  ];

  return (
    <div className=" bg-gray-50 dark:bg-[#1c1c22] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ส่วนหัวข้อ (Header Section) */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase font-jetbrains">My Writing</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            บทความและผลงานการเขียน
          </p>
          <p className="mt-4 max-w-2xl text-xl dark:text-gray-200 text-gray-500 mx-auto">
            รวบรวมความรู้ ประสบการณ์ และเทคนิคต่างๆ ที่ผมได้เรียนรู้ระหว่างการทำงานในสาย Dev
          </p>
        </div>

        {/* รายการบทความ (Blog Grid) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="flex flex-col bg-gradient-to-tl from-[#1e293b] via-[#6366f1] to-[#71717a]  overflow-hidden rounded-2xl shadow-lg  transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* รูปภาพหน้าปก */}
              <div className="flex-shrink-0 relative group">
                <img 
                  className="h-52 w-full object-cover " 
                  src={post.image} 
                  alt={post.title} 
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Launch className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute top-4 left-4 ">
                  <span className=" font-jetbrains inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-blue-100  text-blue-800 shadow-sm">
                    <Category className="mr-1" style={{ fontSize: 14 }} />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* เนื้อหาบทความ */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center text-sm text-white mb-3 font-jetbrains">
                    <RemoveRedEyeIcon className="mr-1" style={{ fontSize: 16 }} />
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <a href={post.link} className="block mt-2">
                    <p className="text-xl font-jetbrains font-bold text-white  hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </p>
                    <p className="mt-3 font-jetbrains text-base text-gray-300 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </a>
                </div>

                {/* ปุ่มอ่านต่อ */}
                <div className="mt-6">
                  <a
                    href={post.link}
                    className="inline-flex font-jetbrains items-center text-sm font-semibold text-white hover:text-blue-400 transition-colors"
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