import "./Facilities.css";

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>Our Facilities</h1>
      <p>Explore the vibrant campus life and student-friendly amenities at VIT-AP University.</p>
      <div className="row">
        <div className="facilities-col">
          <img src="/images/library.png" alt="Library" />
          <h3>Advanced Digital Library</h3>
          <p>
            Access thousands of books, journals, and e-resources in our
            technology-enabled library that supports deep learning and research.
          </p>
        </div>
        <div className="facilities-col">
          <img src="/images/basketball.png" alt="Playground" />
          <h3>Multi-Sport Playgrounds</h3>
          <p>
            Participate in sports and fitness activities on our well-maintained courts
            and fields that promote physical well-being and team spirit.
          </p>
        </div>
        <div className="facilities-col">
          <img src="/images/cafeteria.png" alt="Cafeteria" />
          <h3>Hygienic Food Courts</h3>
          <p>
            Enjoy a wide variety of delicious and nutritious food at our
            student-friendly cafeterias, with a focus on quality and hygiene.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
