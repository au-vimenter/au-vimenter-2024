import EventDescription from "./EventDescription";
import EventEntrollButton from "./EventEntrollButton";
import EventInfo from "./EventInfo";
import EventSupporter from "./EventSupporter";
import Header from "./Header";
import PreviousEvents from "./PreviousEvents";
import VimEnterTitle from "./VimEnterTitle";

const Mobile = () => {
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
      <div className="space-110"></div>
      <VimEnterTitle />
      <div className="space-70"></div>
      <EventDescription />
      <div className="space-60"></div>
      <EventEntrollButton />
      <div className="space-60"></div>
      <EventInfo />
      <div className="space-80"></div>
      <EventSupporter />
      <div className="space-80"></div>
      <PreviousEvents />
      <div className="space-120"></div>
    </div>
  );
};
export default Mobile;
