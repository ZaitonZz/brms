import Image from "next/image";
import LoginBox from "./components/login";
import Footer from "./components/footer";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <div className="topBar">
        <NavBar/>
      </div>
      <div className="firstFrame h-[85vh]">
        <LoginBox></LoginBox>
      </div>
      <div className="Footer">
        <Footer></Footer>
      </div>
    </main>
  );
}
