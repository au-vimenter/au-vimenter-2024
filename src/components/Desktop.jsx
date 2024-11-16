import EventDescription from "./EventDescription";
import EventEntrollButton from "./EventEntrollButton";
import EventInfo from "./EventInfo";
import EventSupporter from "./EventSupporter";
import Header from "./Header";
import VimEnterTitle from "./VimEnterTitle";

const Desktop = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header />
      <div className="space-120"></div>
      <VimEnterTitle />
      <div className="space-80"></div>
      <EventDescription />
      <div className="space-80"></div>
      <EventEntrollButton />
      <div className="space-80"></div>
      <EventInfo />
      <div className="space-40"></div>
      <EventSupporter />
    </div>
  );
};

export default Desktop;
