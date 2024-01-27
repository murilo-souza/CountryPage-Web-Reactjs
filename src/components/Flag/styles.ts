import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  span {
    font-size: 0.75rem;
    font-weight: 400;

    color: ${(props) => props.theme.colors.gray100};
  }

  margin-left: 1.25rem;
`

export const ImageContainer = styled.div`
  width: 5rem;
  height: 3rem;

  border-radius: 3px;

  overflow: hidden;

  margin-bottom: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
