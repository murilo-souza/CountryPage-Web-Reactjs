import styled from 'styled-components'

export const Container = styled.main``

export const ImageBgContainer = styled.div`
  width: 100%;
`

export const BGImage = styled.img`
  width: 100%;

  position: relative;

  z-index: -1;
`
export const LogoImg = styled.img`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const CountryContainer = styled.main`
  max-width: 50rem;
  margin: -5rem auto 2rem auto;

  background: ${(props) => props.theme.colors.gray800};
  border-radius: 8px;

  border: 1px solid ${(props) => props.theme.colors.gray700};

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`
export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
`

export const CountryImageContainer = styled.div`
  width: 15rem;
  height: 11rem;

  border-radius: 10px;

  overflow: hidden;

  margin-top: -4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CountryName = styled.p`
  margin-top: 2rem;

  font-size: 2rem;
  font-weight: 400;
`

export const CountryFullName = styled.span`
  font-size: 1rem;
  font-weight: 400;
`

export const BadgeContainer = styled.section`
  display: flex;
  align-items: center;

  gap: 2rem;

  margin-top: 2rem;

  margin-bottom: 2rem;
`

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;

  margin-bottom: 3rem;
`

export const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 400;

  color: ${(props) => props.theme.colors.gray300};

  text-align: left;

  margin-left: 1.25rem;

  margin-bottom: 1rem;
`

export const FlagContainer = styled.div`
  display: flex;
  align-items: center;

  overflow: hidden;
`
