import React from "react";

const Location = () => {
  const locationEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.976040742986!2d80.49662161533252!3d16.49705537913281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1685912345678!5m2!1sen!2sin";

  return (
    <section className="location" style={{ textAlign: "center", margin: "2rem 0" }}>
      <iframe
        src={locationEmbedUrl}
        width="600"
        height="450"
        style={{ border: 0, maxWidth: "100%" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="VIT-AP University Location"
      ></iframe>
    </section>
  );
};

export default Location;
