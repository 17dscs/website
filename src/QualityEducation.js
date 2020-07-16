import React, { useEffect } from "react";
import Dscomponent from "./dscomponent";

export const QualityEducation = () => {
  useEffect(() => {
    new Dscomponent("dscomponent");
  }, []);
  return (
    <>
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="quality-education">
        <div id="dscomponent" style={{ width: "400px", height: "300px" }}></div>
      </section>
    </>
  );
};
