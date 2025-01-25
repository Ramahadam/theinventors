import Image from 'next/image';
import Card from '../_components/Card';
import HeadingBig from '../_components/HeadingBig';
import ButtonNumber from '../_components/ButtonNumber';
import Button from '../_components/Button';

function Page() {
  return (
    <>
      {/* <ButtonBack /> */}
      <Card>
        <div className="pt-[53px] px-[38px] flex flex-col ">
          <Image
            width="118"
            height="157"
            src="/man-holding-mobile.png"
            alt="man holding mobile"
            className="self-center mb-[38px]"
          />
          <HeadingBig>
            Enter your <span className="block">phone number</span>{' '}
          </HeadingBig>
          <ButtonNumber />
          <p className="mt-2 text-sm">Please enter mobile number</p>
          <Button className="mt-[8rem] self-center">Continue</Button>
        </div>
      </Card>
    </>
  );
}

export default Page;
