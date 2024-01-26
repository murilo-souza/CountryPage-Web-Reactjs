import styled from 'styled-components'

export const Container = styled.select`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  padding: 0 0.75rem;
  font-size: 0.875rem;

  height: 2.5rem;

  background-color: ${(props) => props.theme.colors.gray800};
  color: ${(props) => props.theme.colors.gray100};
  border: 2px solid ${(props) => props.theme.colors.gray700};
`

export const SelectItem = styled.option`
  font-size: 0.875rem;
  line-height: 1;
  color: ${(props) => props.theme.colors.gray100};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;
`
