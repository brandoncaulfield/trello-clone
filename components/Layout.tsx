import { TopAppBar } from "./TopAppBar";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <TopAppBar />
      <main>{children}</main>
    </>
  );
}
