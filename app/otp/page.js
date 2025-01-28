import Button from '../_components/Button';
import Card from '../_components/Card';
import HeadingMedium from '../_components/HeadingMeduim';
import OTPVerification from '../_components/OTPVerification';

function Page() {
  return (
    <div className="text-center">
      <Card className="!py-[6rem] px-[2rem]">
        <HeadingMedium className=" mb-[4rem]">OTP Verification</HeadingMedium>
        <OTPVerification />

        {/* {Navigation Buttons} */}
        <div className="flex justify-between w-full mt-[4rem]">
          <Button hrf="link" className="bg-transparent !text-black">
            Back
          </Button>
          <Button className="flex items-center justify-center w-[10rem] h-[5.5rem] rounded-50">
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Page;
