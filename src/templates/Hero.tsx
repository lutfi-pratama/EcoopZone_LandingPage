import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#">
            <a className='text-white txt-col-md'>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className='text-white txt-col-md'>Profile</a>
          </Link>
        </li>
          <li>
              <Link href="/">
                  <a className='text-white txt-col-md'>Contact</a>
              </Link>
          </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>

              <span className="text-orange-500">{'Empowering Coop Ecosystem\n'}</span>
            <span className="text-primary-500">Coming Soon</span>
          </>
        }

        description={
          <>
              <span className='text-xl text-primary-500'>Collaborate, </span>
              <span className='text-xl text-orange-500'>Integrated, </span>
              <span className='text-xl text-green-500'>Growth Together</span>
          </>

        }

        button={
          <Link href="https://present.ecoopzone.com">
            <a>
              <Button xl>Get Started</Button>
            </a>
          </Link>
        }
      />
    </Section>
      <style jsx>
          {`
            @media only screen and (max-width:768px) {
                .txt-col-md {
                     color:#3A3845
                
                }
            
                  
            }
          `}
      </style>



  </Background>
);

export { Hero };
