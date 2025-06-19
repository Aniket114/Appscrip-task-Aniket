import React, { useState } from 'react';

const filterOptions = {
  'Ideal For': ['Men', 'Women', 'Unisex'],
  'Occasion': ['Casual', 'Formal', 'Party'],
  'Work': ['Office', 'Outdoor', 'Remote'],
  'Fabric': ['Cotton', 'Linen', 'Silk'],
  'Segment': ['Luxury', 'Premium', 'Affordable'],
  'Suitable For': ['Summer', 'Winter', 'All Seasons'],
  'Raw Materials': ['Organic', 'Recycled', 'Synthetic'],
};

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* Mobile Filter Button */}
      <button className="filter-btn" onClick={() => setShowSidebar(!showSidebar)}>
        {showSidebar ? 'HIDE FILTER' : 'FILTER'}
      </button>

      <aside className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <div className="top-bar">
          <span className="items-count">3425 ITEMS</span>
          <span className="hide-filter" onClick={() => setShowSidebar(false)}>HIDE FILTER</span>
        </div>

        <div className="filters">
          <div className="filter-item">
            <label><input type="checkbox" /> Customizable</label>
          </div>

          {Object.entries(filterOptions).map(([filter, options]) => (
            <div key={filter} className="filter-item">
              <details>
                <summary className="summary">{filter}</summary>
                <ul className="sub-options">
                  {options.map((opt, idx) => (
                    <li key={idx}>
                      <label><input type="checkbox" /> {opt}</label>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
        </div>
      </aside>

      <style jsx>{`
        .filter-btn {
          display: none;
          margin: 1rem;
          padding: 0.6rem 1.2rem;
          background: #000;
          color: white;
          border: none;
          font-weight: bold;
          cursor: pointer;
        }

        .sidebar {
          width: 260px;
          padding: 1.5rem 1rem;
          border-right: 1px solid #e0e0e0;
          background-color: #fff;
          font-size: 14px;
          height: 100%;
          overflow-y: auto;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          color: #888;
          font-size: 13px;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .hide-filter {
          cursor: pointer;
          text-decoration: underline;
        }

        .filters {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .filter-item {
          border-bottom: 1px solid #eee;
          padding-bottom: 0.5rem;
        }

        .summary {
          cursor: pointer;
          font-weight: 500;
        }

        .sub-options {
          list-style: none;
          padding-left: 1rem;
          margin-top: 0.5rem;
          color: #555;
        }

        @media (max-width: 768px) {
          .filter-btn {
            display: block;
          }

          .sidebar {
            display: none;
            position: fixed;
            top: 60px;
            left: 0;
            width: 100%;
            height: calc(100vh - 60px);
            background: #fff;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .sidebar.show {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;
