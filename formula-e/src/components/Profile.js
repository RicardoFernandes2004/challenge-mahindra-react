import React from 'react';

function Profile({ toggleProfile }) {
  return (
    <div id="profile" className="profile">
      <div className="profile_quit">
        <img
          id="quit_img"
          src="/img/icone-x-bleue.png"
          alt="X"
          onClick={toggleProfile}
        />
      </div>
      <div className="profile_container">
        <div className="profile_frame">
          <h2>My Profile</h2>
          <div className="profile_img_container">
            <img src="/img/Ellipse 1.svg" alt="Profile Image" />
          </div>
          <div className="profile_info_container">
            <p>Username: <span>John Doe</span></p>
            <p>Email: <span>Johndoe@gmail.com</span></p>
          </div>
        </div>
        <div className="profile_settings">
          <p>Log out</p>
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
