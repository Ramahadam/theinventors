'use client';
import HeadingBig from './HeadingBig';
import ButtonNumber from './ButtonNumber';

export default function PhoneNumberSection({ icon }) {
  return (
    <div className="card-body px-6">
      <HeadingBig>
        Enter your <span className="block">phone number</span>
      </HeadingBig>
      <ButtonNumber icon={icon} />
    </div>
  );
}
