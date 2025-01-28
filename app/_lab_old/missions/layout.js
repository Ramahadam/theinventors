import MenuAction from '@/app/_components/MenuAction';

export const metadata = {
  layout: false,
};

export default function Layout({ children }) {
  return (
    <div className="h-full">
      <div>{children}</div>
      <MenuAction />
    </div>
  );
}
