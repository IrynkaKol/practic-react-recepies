import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 8px;
  width: 320px;
  font-size: 8px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  higth: 240px;
  object-fit: cover;
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 8px;
`;

export const InfoBlock = styled.p`
  margin: 0;
  padding: 8px 0;
  display: flex;
  align-items: center;

  svg {
    color: blue;
  }
`;

export const BageList = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
`;
export const Bage = styled.span`
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;

  background-color: ${({ variant, isActive }) => {
    const defaultColor = 'lightgrey';
    //let color;
    switch (variant) {
      case 'easy':
        /*color = 'green';
        break;*/
        return isActive ? 'green' : defaultColor;
      case 'medium':
        /*color = 'blue';
        break;*/
        return isActive ? 'blue' : defaultColor;
      case 'hard':
        /*color = "red";
        break;*/
        return isActive ? 'red': defaultColor;
        default: 
        throw new Error('Unsuported variant props')
    }
    
  }};
  color: ${props => {
    return props.isActive ? 'white' : 'black';
  }}
`;
