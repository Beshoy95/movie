import { Header, Footer } from './index';

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
