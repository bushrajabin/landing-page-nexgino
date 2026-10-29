import "../index.css";

function Contact() {
  return (
    <div className="contactcontainer">
      <h2 className="contactTitle">Schedule a Consult</h2>

      <div className="contactDetailsDiv">
        {/* left side */}
        <div className="contactLeftBox">
          <p className="label">📍 Address</p>
          <p className="detail">
            The Law Office of Thomas Northman <br />
            306 Green St. <br />
            Suite 1305 <br />
            San Francisco, CA 5604
          </p>

          <p className="label">✉ Email</p>
          <p className="detail">tm@thomasnorthman.com</p>

          <p className="label">📞 Phone</p>
          <p className="detail">(413) 587-7770</p>

          <div className="social">
            <span>✉</span>
            <span>f</span>
            <span>◎</span>
            <span>▶</span>
          </div>
        </div>

        {/* right side */}
        <form className="contactRightBox">
          <div className="row">
            <div className="field">
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input type="text" placeholder="Carter" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>
            <div className="field">
              <label>Phone</label>
              <input type="text" placeholder="(123) 456-789" />
            </div>
          </div>

          <div className="field">
            <label>Message</label>
            <textarea placeholder="Please type your message here..."></textarea>
          </div>

          <button className="send-btn">Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;