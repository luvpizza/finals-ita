import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Find from "@/components/sections/Find/Find";
import Partnership from "@/components/sections/Partnership/Partnership";
import Pros from "@/components/sections/Pros/Pros";

export default function Home() {
    return (
        <>
          <Header/>
          <Find/>
          <Pros/>
          <Partnership/>
          <Footer/>
        </>
    )
}
