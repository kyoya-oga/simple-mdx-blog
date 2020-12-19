import styled from "styled-components"

export const ContainerWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-row: 7.8rem 20rem 5rem auto;
  gap: 0 2rem;

  @media ${props => props.theme.breakpoints.Large} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.Small} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    gap: 0 1rem;
  }
`