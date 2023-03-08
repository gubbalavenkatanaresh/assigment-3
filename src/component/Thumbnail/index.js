import './index.css'

const Thumbnail = props => {
  const {activeThumbnails, playing} = props
  const {id, thumbnailUrl} = activeThumbnails

  const clickThumbnail = () => {
    playing(id)
  }

  return (
    <li>
      <button type="button" className="thumbnail-button">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-img"
          onClick={clickThumbnail}
        />
      </button>
    </li>
  )
}

export default Thumbnail
