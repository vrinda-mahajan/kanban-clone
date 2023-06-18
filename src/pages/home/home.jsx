import Main from "../../components/main/main";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex-r">
      <Sidebar />
      <Main />
      </div>
    </div>
  );
}
