const VideoPlayer = ({ videoId, title = 'Video player', className = '', autoplay = false }) => {
  if (!videoId) return null

  const params = autoplay ? `?autoplay=1&mute=1&loop=1&playlist=${videoId}` : ''
  const embedUrl = `https://www.youtube.com/embed/${videoId}${params}`

  return (
    <div className={`relative w-full overflow-hidden rounded-xl pt-[56.25%] shadow-lg ${className}`}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

export default VideoPlayer

