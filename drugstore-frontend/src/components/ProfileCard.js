import React from 'react';
import './card.css';

const ProfileCard = ({ user, handleCancelPremium, isPremium, handleBecomePremium, handleBecomeAdmin, isAdmin, handleCancelAdmin }) => {
  const cardStyle = user.accessId === 2 ? 'premium-card' : user.accessId === 3 ? 'admin-card' : 'standard-card';

  return (
    <div className={`card profile-card ${cardStyle}`}>
      <div className="card-header">
        <h2>Profile</h2>
      </div>

      <div className="card-body">
        <p className="card-text">
          <strong>Username:</strong> {user.username}
        </p>

        <p className="card-text">
          <strong>Email:</strong> {user.email}
        </p>

        <p className="card-text">
          <strong>Access Level:</strong> {user.accessId === 3 ? 'Admin' : (isPremium ? 'Premium' : 'Standard')}
        </p>

        {(user.accessId === 1 || user.accessId === 2 || user.accessId === 3) && (
          <div className="btn-group" role="group">
            {isPremium ? (
              <button
                onClick={handleBecomeAdmin}
                disabled={user.accessId === 3 || isAdmin}
                className="btn btn-primary"
              >
                Become Admin
              </button>
            ) : (
              <button
                onClick={handleBecomePremium}
                disabled={user.accessId === 3 || isPremium}
                className="btn btn-primary"
              >
                Become Premium
              </button>
            )}

            {isAdmin ? (
              <button
                onClick={handleCancelAdmin}
                disabled={ !isAdmin}
                className="btn btn-secondary"
              >
                Cancel Admin
              </button>
            ) : (
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
