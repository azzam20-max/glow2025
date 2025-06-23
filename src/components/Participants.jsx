import React from 'react';
import './Participants.css';

function Participants() {
  // Dummy data peserta
  const participants = [
    { name: 'Ayu Lestari', country: 'Indonesia' },
    { name: 'Muhammad Farhan', country: 'Malaysia' },
    { name: 'Nurul Aini', country: 'Singapore' },
    { name: 'Somchai Prasert', country: 'Thailand' },
    { name: 'Jose Rizal', country: 'Philippines' },
    { name: 'Nguyen Thi Mai', country: 'Vietnam' }
  ];

  return (
    <section className="participants-section">
      <div className="participants-container">
        <h1>List of Participants</h1>
        <ul className="participants-list">
          {participants.map((p, index) => (
            <li key={index} className="participant-item">
              <span className="participant-name">{p.name}</span>
              <span className="participant-country">{p.country}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Participants;
