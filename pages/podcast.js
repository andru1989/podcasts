import 'isomorphic-fetch'
import Podcast from '../components/Podcast'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    let fetchClip = await fetch(`https://api.audioboom.com/audio_clips/${query.id}.mp3`)
    let clip = (await fetchClip.json()).body.audio_clip

    return { clip }
  }

  render() {
    const { clip } = this.props

    return (
      <div>
        <header>Podcasts</header>

        <Podcast clip={clip} />
      </div>
    )
  }
}