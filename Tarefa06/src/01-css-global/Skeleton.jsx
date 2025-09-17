// src/01-css-global/Skeleton.jsx
import './index.css';

const Skeleton = () => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="skeleton skeleton-image"></div>
      </div>
      <div className="product-info">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-price"></div>
        <div className="skeleton skeleton-rating"></div>
        <div className="skeleton skeleton-tag"></div>
        <div className="button-group">
          <div className="skeleton skeleton-button"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;