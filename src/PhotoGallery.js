import React, { useState, useEffect } from 'react';
import './App.css';

/***********************
  Photo Gallery Component
 ***********************/

const PhotoGallery = () => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [displayedPhotos, setDisplayedPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [photosToShow, setPhotosToShow] = useState(6); // Initially show 6 photos
  const [hasMore, setHasMore] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Gallery photos from the public/gallery directory
  const galleryPhotos = [
    {
      id: 1,
      url: '/gallery/20250821_175203.jpg',
      title: 'Captured Moment',
      description: 'A beautiful moment in time'
    },
    {
      id: 2,
      url: '/gallery/20250827_183258.jpg',
      title: 'Evening Light',
      description: 'Golden hour photography'
    },
    {
      id: 3,
      url: '/gallery/20250828_203937.jpg',
      title: 'Night Scene',
      description: 'Late evening capture'
    },
    {
      id: 4,
      url: '/gallery/20250830_172306.jpg',
      title: 'Afternoon Shot',
      description: 'Perfect lighting conditions'
    },
    {
      id: 5,
      url: '/gallery/20250904_105234.jpg',
      title: 'Morning Glory',
      description: 'Early morning photography'
    },
    {
      id: 6,
      url: '/gallery/20250904_170453.jpg',
      title: 'Sunset Vibes',
      description: 'Beautiful sunset moment'
    },
    {
      id: 7,
      url: '/gallery/20250904_175455.jpg',
      title: 'Golden Hour',
      description: 'Perfect golden hour shot'
    },
    {
      id: 8,
      url: '/gallery/20250904_180732.jpg',
      title: 'Evening Glow',
      description: 'Warm evening light'
    },
    {
      id: 9,
      url: '/gallery/20250904_182127.jpg',
      title: 'Twilight Magic',
      description: 'Magical twilight hour'
    },
    {
      id: 10,
      url: '/gallery/20250904_182345_03.jpg',
      title: 'Night Photography',
      description: 'Stunning night capture'
    },
    {
      id: 11,
      url: '/gallery/20250905_111038.jpg',
      title: 'Mid-day Shot',
      description: 'Bright daylight photography'
    },
    {
      id: 12,
      url: '/gallery/20250905_113112.jpg',
      title: 'Noon Light',
      description: 'Clear noon lighting'
    },
    {
      id: 13,
      url: '/gallery/20250905_113150.jpg',
      title: 'Bright Moment',
      description: 'Vibrant daylight scene'
    },
    {
      id: 14,
      url: '/gallery/20250905_142811.jpg',
      title: 'Afternoon Delight',
      description: 'Perfect afternoon shot'
    },
    {
      id: 15,
      url: '/gallery/20250905_143124.jpg',
      title: 'Day Scene',
      description: 'Beautiful daytime capture'
    },
    {
      id: 16,
      url: '/gallery/20250905_161752.jpg',
      title: 'Late Afternoon',
      description: 'Soft afternoon light'
    },
    {
      id: 17,
      url: '/gallery/20250905_162814.jpg',
      title: 'Evening Approach',
      description: 'Transitioning to evening'
    },
    {
      id: 18,
      url: '/gallery/20250906_000544.jpg',
      title: 'Midnight Hour',
      description: 'Late night photography'
    },
    {
      id: 19,
      url: '/gallery/20250906_085750.jpg',
      title: 'Morning Rays',
      description: 'Early morning sunlight'
    },
    {
      id: 20,
      url: '/gallery/20250911_133642.jpg',
      title: 'Midday Scene',
      description: 'Perfect midday lighting'
    },
    {
      id: 21,
      url: '/gallery/20250918_151353.jpg',
      title: 'Afternoon Beauty',
      description: 'Stunning afternoon view'
    },
    {
      id: 22,
      url: '/gallery/20250918_184732.jpg',
      title: 'Evening Glory',
      description: 'Beautiful evening capture'
    },
    {
      id: 23,
      url: '/gallery/sunset.jpg',
      title: 'Sunset Bliss',
      description: 'Nature at its best'
    },
    {
      id: 24,
      url: '/gallery/chapora1.png',
      title: 'Dil chahta hai spot',
      description: 'Great day with friends'
    },
    {
      id: 25,
      url: '/gallery/breakfast1.jpg',
      title: 'In between south and north india',
      description: 'too good to be missed'
    }
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setAllPhotos(galleryPhotos);
      setDisplayedPhotos(galleryPhotos.slice(0, photosToShow));
      setLoading(false);
      setHasMore(galleryPhotos.length > photosToShow);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const loadMorePhotos = () => {
    const newPhotosToShow = photosToShow + 6;
    setDisplayedPhotos(allPhotos.slice(0, newPhotosToShow));
    setPhotosToShow(newPhotosToShow);
    setHasMore(allPhotos.length > newPhotosToShow);
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  // TODO: Replace with actual Google Photos API integration
  const loadPhotosFromGooglePhotos = async () => {
    try {
      // This is where you would implement Google Photos API integration
      // For now, we'll use gallery data
      console.log('Google Photos API integration to be implemented');
    } catch (error) {
      console.error('Error loading photos from Google Photos:', error);
    }
  };

  if (loading) {
    return (
      <section id="photo-gallery">
        <div className="gallery-container">
          <div className="heading">
            <h3 className="title">Loading Photo Gallery...</h3>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="photo-gallery">
      <div className="gallery-container">
        <div className="heading">
          <h3 className="title">Photo Gallery</h3>
          <div className="separator"></div>
          <p className="subtitle">
            A collection of moments and memories captured through my lens
          </p>
        </div>
        
        <div className="photos-grid">
          {displayedPhotos.map((photo) => (
            <div key={photo.id} className="photo-item">
              <div className="photo-container" onClick={() => openModal(photo)}>
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="photo-image"
                  loading="lazy"
                />
                <div className="photo-overlay">
                  <h4 className="photo-title">{photo.title}</h4>
                  <p className="photo-description">{photo.description}</p>
                  <span className="photo-click-hint">Click to view full size</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="load-more-container">
            <button 
              className="load-more-btn"
              onClick={loadMorePhotos}
            >
              Load More Photos
            </button>
          </div>
        )}

        <div className="gallery-footer">
          <p className="gallery-stats">
            Showing {displayedPhotos.length} of {allPhotos.length} photos
          </p>
        </div>
      </div>

      {/* Modal for full-size image view */}
      {modalOpen && selectedPhoto && (
        <div className="photo-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-image-container">
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.title}
                className="modal-image"
              />
            </div>
            <div className="modal-info">
              <h3 className="modal-title">{selectedPhoto.title}</h3>
              <p className="modal-description">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;