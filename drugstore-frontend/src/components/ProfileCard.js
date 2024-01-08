import React from 'react';
import './card.css';

const ProfileCard = ({
  user,
  handleCancelPremium,
  isPremium,
  handleBecomePremium,
  handleBecomeAdmin,
  isAdmin,
  handleCancelAdmin,
}) => {
  const cardStyle = user.accessId === 2 ? 'premium-card' : user.accessId === 3 ? 'admin-card' : 'standard-card';

  return (
    <div className={`card profile-card ${cardStyle}`}>
      <div className="card-header">
        <h2>Profile</h2>
      </div>

      <div className="card-body">
        <div className="profile-info">
          <p>
            <strong>Username:</strong> {user.username}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Access Level:</strong> {user.accessId === 3 ? 'Admin' : isPremium ? 'Premium' : 'Standard'}
          </p>
        </div>

        {(user.accessId === 1 || user.accessId === 2 || user.accessId === 3) && (
          <div className="profile-actions">
            {!isAdmin && !isPremium && (
              <button onClick={handleBecomePremium} className="btn btn-primary">
                Become Premium
              </button>
            )}

            {isPremium && (
              <button
                onClick={handleBecomeAdmin}
                disabled={user.accessId === 3 || isAdmin}
                className="btn btn-primary"
              >
                Become Admin
              </button>
            )}

            {isAdmin && (
              <button onClick={handleCancelAdmin} disabled={!isAdmin} className="btn btn-secondary">
                Cancel Admin
              </button>
            )}

            {!isAdmin && isPremium && (
              <button
                onClick={handleCancelPremium}
                disabled={user.accessId === 3 || !isPremium}
                className="btn btn-secondary"
              >
                Cancel Premium
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;

/* */