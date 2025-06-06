import "./BlogContent.css";

const BlogContent = () => {
  return (
    <section className="blog-content">
      <div className="row">
        <div className="blog-left">
          <img src="/images/certificate.jpg" alt="VIT-AP Programs" />
          <h2>Explore VIT-AP University Programs - 2025</h2>
          <p>
            VIT-AP University offers an innovative and interdisciplinary learning environment that blends academic excellence with hands-on experience. Our programs are designed to equip students with future-ready skills in areas like Artificial Intelligence, Robotics, Business Analytics, Law, and Media Studies.
          </p>
          <br />
          <p>
            Whether your passion lies in Computer Science, Data Science, Electronics, Entrepreneurship, or even liberal arts, VIT-AP provides you with cutting-edge curriculum, global exposure through international pathways, and opportunities to engage in real-world projects and research.
          </p>
          <br />
          <p>
            The university fosters innovation through centers like TIFAC CORE and the Innovation & Incubation Centre. With access to state-of-the-art labs, flexible learning paths (like the Fully Flexible Credit System), and support for startups, students are encouraged to think beyond the classroom.
          </p>
          <br />
          <p>
            Ready to shape your future? Join a community where learning meets leadership. Drop your thoughts or queries in the comments below and take the first step towards an exceptional academic journey at VIT-AP!
          </p>

          <div className="comment-box">
            <h3>Leave a comment</h3>
            <form className="comment-form">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <textarea rows="5" placeholder="Your comment"></textarea>
              <button type="submit" className="hero-btn red-btn">
                POST COMMENT
              </button>
            </form>
          </div>
        </div>

        <div className="blog-right">
          <h3>Post Categories</h3>
          <div><span>Artificial Intelligence</span><span>35</span></div>
          <div><span>Data Science</span><span>28</span></div>
          <div><span>Cyber Security</span><span>18</span></div>
          <div><span>Law and Public Policy</span><span>25</span></div>
          <div><span>Robotics and Automation</span><span>20</span></div>
          <div><span>Media and Communication</span><span>22</span></div>
          <div><span>Entrepreneurship</span><span>30</span></div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
