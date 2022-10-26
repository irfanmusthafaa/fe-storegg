import ReachItem from "./reach-item";

export default function Reach() {
  return (
    <section className="reached pt-50 pb-50">
        <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
            <ReachItem reach="290M+" category="Players Top Up" />
            <ReachItem reach="12.500" category="Games Available" />
            <ReachItem reach="99,9%" category="Happy Players" />
            <ReachItem reach="4.7" category="Rating Worldwide" />
        </div>
        </div>
    </section>
  )
}
