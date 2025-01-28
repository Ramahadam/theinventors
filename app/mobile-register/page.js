import Image from 'next/image';
import Card from '../_components/Card';
import HeadingBig from '../_components/HeadingBig';
import ButtonNumber from '../_components/ButtonNumber';
import Button from '../_components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import ButtonBack from '../_components/ButtonBack';

function Page() {
  return (
    <>
      <ButtonBack href="/" />

      <Card className="mt-[4rem]">
        <div className="pt-[5.3rem] px-[2.8rem] flex flex-col">
          <Image
            width="118"
            height="157"
            src="/man-holding-mobile.png"
            alt="man holding mobile"
            className="self-center mb-[3.8rem]"
          />
          <HeadingBig className="text-h2">
            Enter your <span className="block">phone number</span>{' '}
          </HeadingBig>

          <div className="flex justify-center">
            <ButtonNumber icon={<FontAwesomeIcon icon={faInfoCircle} />} />
          </div>
          <p className="mt-[2rem] text-p-sm ">Please enter mobile number</p>
          <Button href="/otp" className="mt-[4rem] self-center">
            Continue
          </Button>
        </div>
      </Card>
    </>
  );
}

export default Page;
