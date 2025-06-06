import "./Campus.css";

const Campus = () => {
  return (
    <section className="campus">
      <h1>Our Campuses and Global Collaborations</h1>
      <p>Experience world-class education at VIT's vibrant campuses and through global academic partnerships.</p>
      <div className="row">
        <div className="campus-col">
          <img src="/images/vit-ap-campus.jpg" alt="VIT-AP Campus" />
          <div className="layer">
            <h3>VIT-AP (Amaravati)</h3>
          </div>
        </div>

        <div className="campus-col">
          <img src="/images/vellore-campus.jpg" alt="VIT Vellore Campus" />
          <div className="layer">
            <h3>VIT VELLORE</h3>
          </div>
        </div>

        <div className="campus-col">
          <img src="/images/international-partner.jpg" alt="Global Partners" />
          <div className="layer">
            <h3>GLOBAL PARTNERSHIPS</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
