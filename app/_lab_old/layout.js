import Card from '../_components/Card';
import LabHeader from '../_components/LabHeader';
import LabMenu from '../_components/LabMenu';
import MenuAction from '../_components/MenuAction';

export default function Layout({ children }) {
  return (
    <div className="h-full">
      <LabHeader />
      {/*  <LabMenu /> */}

      <div>{children}</div>

      <MenuAction />
    </div>
  );
}
