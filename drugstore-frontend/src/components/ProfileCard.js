// ProfileCard.js
import React from 'react';

const ProfileCard = ({ user, onTogglePremium }) => {
  return (
    <div className="profile-card">
      <h2>Profile</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      {user.accessId === 3 ? (
        <p>
          <strong>Access Level:</strong> Admin
        </p>
      ) : (
        <>
          <p>
            <strong>Access Level:</strong>{' '}
            {user.accessId === 2 ? 'Premium' : 'Standard'}
          </p>
          {user.accessId === 1 && (
            <button onClick={onTogglePremium}>
              Become Premium
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ProfileCard;
