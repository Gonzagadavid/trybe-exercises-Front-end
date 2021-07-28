import React from 'react';
import { connect } from 'react-redux';
import { bool, shape, string, arrayOf } from 'prop-types'

class CharacterInfo extends React.Component {
  render() {
    const { loading, character, error } = this.props
    if (!loading && character.name) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

const mapStateToProps = (state) => ({
  loading: state.reducerCharacter.loading,
  character: state.reducerCharacter.character,
  error: state.reducerCharacter.erro
})

CharacterInfo.propTypes = {
  loading: bool.isRequired,
  character: shape({
    name: string,
    gender: string,
    aliases: arrayOf('string'),
    books: arrayOf('string')
  }),
  error: string
}

export default connect(mapStateToProps)(CharacterInfo)
