import React from 'react'

// The base URL for TMDB images
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  // Destructure properties for cleaner access
  const { title, vote_average, poster_path, release_date, original_language } = movie;

  const posterUrl = poster_path 
    ? `${IMAGE_BASE_URL}/${poster_path}` 
    : '/No-Poster.png'; // Assumes No-Poster.png is in your /public folder

  return (
    <li className='overflow-hidden transition-transform duration-300 transform shadow-lg movie-card bg-gray-900/50 backdrop-blur-sm rounded-xl hover:scale-105 hover:shadow-2xl'>
      <img 
        src={posterUrl} 
        alt={`Poster for ${title}`}
        className="object-cover w-full h-auto"
        // Add an onerror handler for broken image links
        onError={(e) => { e.target.onerror = null; e.target.src='/No-Poster.png' }}
      />

      <div className='p-4'>
        <h3 className='text-lg font-bold text-white truncate' title={title}>{title}</h3>
        <div className='flex items-center justify-between mt-2 text-sm text-gray-300'>
          <div className='flex items-center gap-2'>
            <img src='/star.svg' alt='Star Icon' className='w-4 h-4'/>
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>

          <div className='flex items-center gap-2'>
            <p className='font-semibold uppercase language'>{original_language}</p>
            <span className='text-gray-500'>|</span>
            <p className='year'>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default MovieCard
