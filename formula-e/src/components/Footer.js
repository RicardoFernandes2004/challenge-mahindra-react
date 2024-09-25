import React from 'react';

function Footer() {
  return (
    <footer>
      <section className="footer_container">
        <div className="social_media_container">
          <div className="footer_frame">
            <h2>Follow Us</h2>
            <div className="footer_img_container">
              <a href="#"><img src="/img/Instagram_icon 1.png" alt="Instagram" /></a>
              <a href="#"><img id="x" src="/img/twitter_x_new_logo_square_x_icon_256075 1.png" alt="Twitter" /></a>
              <a href="#"><img src="/img/facebook_plain_logo_icon_146525 1.png" alt="Facebook" /></a>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>© 2024 TECHRAC-E Holdings Ltd. All rights reserved.</p>
        </div>
        <div className="quicklinks_container">
          <div className="footer_frame">
            <h2>Quick Links:</h2>
            <ul>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Drivers</a></li>
                <li><a href="#">Rules & Regulations</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Media</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
