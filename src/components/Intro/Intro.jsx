import React from 'react';
import './responsive-player.scss';

const YoutubeEmbed = ({ embedId }) => {
  return (
    <section id="intro" className="section-video-responsive">
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </section>
  );
};
export default YoutubeEmbed;
