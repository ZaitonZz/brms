import Image from "next/image";
import TopBar from "./components/topbar";
import LoginForm from "./components/login";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <div className="topBar">
        <TopBar/>
      </div>
      <div className="firstFrame h-[85vh]">
        <LoginForm></LoginForm>
      </div>
      <div className="Footer">
        <Footer></Footer>
      </div>
    </main>
  );
}
