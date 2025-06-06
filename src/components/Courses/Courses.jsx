import "./Courses.css";

const Courses = () => {
  return (
    <section className="course">
      <h1>Courses We Offer</h1>
      <p>
        Explore VIT-AP’s wide range of innovative undergraduate and postgraduate programs designed to prepare you for tomorrow's challenges.
      </p>
      <div className="row">
        <div className="course-col">
          <h3>Undergraduate Programs</h3>
          <p>
            Choose from B.Tech specializations such as Artificial Intelligence,
            Data Science, Cyber Security, and Computer Science. We also offer BA,
            BBA, B.Com, and B.Sc. programs tailored for global careers.
          </p>
        </div>
        <div className="course-col">
          <h3>Postgraduate Programs</h3>
          <p>
            Advance your expertise with M.Tech, MBA, MCA, and integrated M.Sc. programs.
            Our PG courses emphasize research, industry exposure, and leadership skills.
          </p>
        </div>
        <div className="course-col">
          <h3>Interdisciplinary & Law</h3>
          <p>
            Enroll in unique programs like B.A. LL.B., BBA LL.B., and Data Science in Liberal Arts.
            VIT-AP fosters innovation through a multi-disciplinary approach and flexible curriculum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
