import phone from "./Images/phoneGreen.png";
import email from "./Images/emailGreen.png";
import address from "./Images/addressGreen.png";

function Contact() {
  const contact = [
    {
      text: "123 Main Street, Chicago, IL 60601",
      image: address,
    },
    {
      text: "(555) 123-4567",
      image: phone,
    },
    {
      text: "mario@littlelemon.com",
      image: email,
    },
  ];

  return (
    <div className="contactContainer">
      <h1>Contact</h1>
      <div className="contactContents">
        <div>
          <ul>
            {contact.map((e) => (
              <li key={e.text} className="contactPageListItem">
                <img
                  className="contactIcons"
                  src={e.image}
                  style={{ width: "20px", height: "20px" }}
                  alt={e.text}
                ></img>
                {e.text}
              </li>
            ))}
          </ul>
          <h2 className="contactSubtitle">Opening Times:</h2>
          <ul className="openingTimes">
            <li>
              <span className="day">Monday:</span> Closed
            </li>
            <li>
              <span className="day">Tuesday:</span> Closed
            </li>
            <li>
              <span className="day">Wednesday:</span> 12pm - 11pm
            </li>
            <li>
              <span className="day">Thursday:</span> 12pm - 11pm
            </li>
            <li>
              <span className="day">Friday:</span> 12pm - 11pm
            </li>
            <li>
              <span className="day">Saturday:</span> 12pm - 11pm
            </li>
            <li>
              <span className="day">Sunday:</span> 12pm - 11pm
            </li>
          </ul>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47541.38669463829!2d-87.65952284892576!3d41.8641024784928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sau!4v1699238862633!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
