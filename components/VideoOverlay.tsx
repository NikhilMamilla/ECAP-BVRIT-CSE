import React, { useEffect, useRef, useState } from 'react';
import '../styles/videoAnimation.css';

// Centralized video source constants
const MOBILE_VIDEO_SRC = '/videos/bvrit-hero-mobile.mp4';
const DESKTOP_VIDEO_SRC = '/videos/bvrit-hero-desktop.mp4';
const MOBILE_PLAYBACK_RATE = 1.5; // updated speed
const DESKTOP_PLAYBACK_RATE = 1.5; // updated speed

interface VideoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  autoplay?: boolean;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({ isOpen, onClose, autoplay = true }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  // Determine mobile immediately to set correct src before first paint
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  });
  // (Removed unused logoPosition state)
  
  // Detect mobile device and connection speed
  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Make the video fill the entire screen and provide a smooth animation to logo at the end
  // No need for actual fullscreen API which is causing issues

  // Handle video playback when overlay opens
  useEffect(() => {
    // Ensure video plays as soon as it's rendered
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = isMobile ? MOBILE_PLAYBACK_RATE : DESKTOP_PLAYBACK_RATE; // normalized speed
      
      // Add error handling for video loading issues
      videoRef.current.onerror = (e) => {
        console.error('Video loading error:', e);
        // Fallback to local video if loading fails
        if (videoRef.current) {
          videoRef.current.src = isMobile ? '/videos/bvrit-hero-mobile.mp4' : '/videos/bvrit-hero-desktop.mp4';
          videoRef.current.load();
        }
      };
      
      // No fullscreen, but make sure the overlay covers the entire viewport
      if (overlayRef.current) {
        overlayRef.current.style.width = '100vw';
        overlayRef.current.style.height = '100vh';
        overlayRef.current.style.position = 'fixed';
        overlayRef.current.style.zIndex = '9999';
        overlayRef.current.style.top = '0';
        overlayRef.current.style.left = '0';
      }
      
      // Prevent body scrolling when overlay is open
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden'; // Prevent html scrolling too
      
      // Prevent zooming/scaling on mobile (ensure meta set only once)
      if (isMobile) {
        if (!document.querySelector('meta[name="viewport"][data-lock="1"]')) {
          const meta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
          if (meta) {
            meta.dataset.lock = '1';
            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
          }
        }
      }
      
      // Attempt to play with retry mechanism
      const playVideo = () => {
        videoRef.current?.play().catch(() => {
          // Retry quickly to minimize blank time
          setTimeout(playVideo, 250);
        });
      };
      
      playVideo();

  // Removed quickIntro auto-close; full video will now play
      
      // Restore scrolling and viewport settings when component unmounts
      return () => {
        document.body.style.overflow = '';
        if (isMobile) {
          const metaViewport = document.querySelector('meta[name="viewport"][data-lock="1"]');
          if (metaViewport) metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
      };
    }
  }, [isOpen, isMobile]);

  // No fullscreen handling needed
  
  // Handle graceful close with animation
  const handleClose = () => {
    setIsClosing(true);
    
    // Wait for animation to complete before actually closing
    setTimeout(() => {
      setIsClosing(false);
      
      // Restore body and document scrolling
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      
      // Restore viewport settings
      const metaViewport = document.querySelector('meta[name="viewport"]');
      if (metaViewport) {
        metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      }
      
      // If on mobile, stop the video to save resources
      if (isMobile && videoRef.current) {
        videoRef.current.pause();
      }
      
      onClose();
    }, 800); // Match to animation duration
  };

  // Handle auto-close when video ends with special animation for desktop
  const handleVideoEnd = () => {
    // Desktop: perform closing animation
    if (!isMobile && videoRef.current) {
      const videoElement = videoRef.current;
      const screenHeight = window.innerHeight;
      const scaleRatio = Math.min(0.2, 150 / Math.min(window.innerWidth, screenHeight));
      const translateY = -screenHeight * 0.45;
      videoElement.style.transition = 'transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.8s ease-in-out';
      videoElement.style.transformOrigin = 'center top';
      videoElement.style.transform = `translate(0px, ${translateY}px) scale(${scaleRatio})`;
      videoElement.style.opacity = '0.2';
      if (overlayRef.current) {
        overlayRef.current.style.transition = 'background-color 1.5s ease';
        overlayRef.current.style.backgroundColor = 'rgba(0,0,0,0.7)';
        overlayRef.current.style.pointerEvents = 'none';
      }
      setTimeout(() => {
        if (overlayRef.current) overlayRef.current.style.pointerEvents = '';
        handleClose();
      }, 2000);
    } else {
      // Mobile: simply close when video ends
      handleClose();
    }
  };
  
  if (!isOpen) return null;

  return (
    <div 
      ref={overlayRef}
      className={`video-animation-container ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      style={{ 
        backgroundColor: 'black',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        minHeight: '-webkit-fill-available', // Fix for iOS viewport height
        zIndex: 9999, // Ensure it's above everything else
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Prevent scrolling
        margin: 0,
        padding: 0,
        perspective: '1000px' // Adds depth perspective for 3D animations
      }}
      onClick={handleClose} // Allow tapping to close
    >
      <div className="video-wrapper" style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        padding: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}>
        <video 
          ref={videoRef}
          className={`video-animation ${isClosing ? 'animate-zoom-out' : 'animate-zoom-in'}`}
          src={isMobile ? MOBILE_VIDEO_SRC : DESKTOP_VIDEO_SRC}
          autoPlay={autoplay}
          muted
          playsInline
          poster="/favicon.svg"
          preload="auto" // small file: always fully preload to avoid black frame
          crossOrigin="anonymous"
          onError={(e) => {
            console.error('Video error:', e);
            // Already handled in useEffect
          }}
          onEnded={handleVideoEnd}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', // Always cover for fullscreen effect on both mobile and desktop
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 0,
            padding: 0,
            transformOrigin: 'center center',
            willChange: 'transform, opacity', // Hardware acceleration hint
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transition: 'transform 1.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.5s ease-out' // Built-in transition
          }}
        />
      </div>
      {/* Close button removed as requested */}
    </div>
  );
};

export default VideoOverlay;
