import * as Styled from './style'
import Icon1 from '../../assets/images/Icon1.svg';
import Icon2 from '../../assets/images/Icon2.svg';
import Icon3 from '../../assets/images/Icon3.svg';
import Icon4 from '../../assets/images/Icon4.svg';
import Icon5 from '../../assets/images/Icon5.svg';


export const Brands = () => {
    const iconArray = [Icon1, Icon5, Icon2, Icon3, Icon4];

  return (
    <Styled.Wrapper>
    <Styled.BrandsBody>
      {iconArray?.map((icon:any,index:number)=>(
        <Styled.Icon key={index} src={icon} alt="" />
      ))}
    </Styled.BrandsBody>
    </Styled.Wrapper>
  )
}
