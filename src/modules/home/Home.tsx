
import { Pricing } from '../pricing/Pricing'
import { Service } from '../service/Service'
import { Testimonial } from '../testimonial/Testimonial'
import { Access } from '../access/Access'
import * as Styled from './style'
import { Brands } from '../brands/Brands'
import { UseSass } from '../useSass/UseSass'
import { Footer } from '../app/components/footer/Footer'
import { Banner } from '../banner/Banner'

export const Home: React.FC = () => {
 
 return (
      <Styled.HomeBody>
      <Banner />
      <Brands />
      <Service />
      <UseSass />
      <Access />
      <Pricing />
      <Testimonial />
      <Footer />
      </Styled.HomeBody>
  )
}
