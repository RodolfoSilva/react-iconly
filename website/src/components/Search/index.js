import { useContext } from 'react'
import { Search as SearchIcon } from 'react-iconly'
// import { Select } from '@components'
import { withTheme } from 'styled-components'
import { connectSearchBox } from 'react-instantsearch-dom'
import { IconDataContext } from '@lib/context'
import {
  StyledForm,
  StyledIconContainer,
  StyledInput,
  StyledAlgoliaImg
} from './styles'

const Search = ({ theme, currentRefinement, refine }) => {
  const { removeIcon } = useContext(IconDataContext)
  return (
    <StyledForm noValidate action='' role='search'>
      <StyledIconContainer>
        <SearchIcon primaryColor={theme.colors.accent3} />
      </StyledIconContainer>
      <StyledInput
        autoFocus
        type='search'
        onFocus={removeIcon}
        focusShortcuts={['s', '/']}
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
        placeholder='Search icon...'
      />
      <StyledAlgoliaImg className='algolia-logo' src='/algolia-logo.svg' />
      {/*
      <StyledSelectContainer>
        <Select searchable attribute='set' />
      </StyledSelectContainer>
    */}
    </StyledForm>
  )
}

const CustomSearchBox = connectSearchBox(Search)

export default withTheme(CustomSearchBox)
