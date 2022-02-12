import React, { useEffect, useRef } from "react";
import { Engine, Scene } from "@babylonjs/core";

function Canvas(props) {
  const refCanvas = useRef(null);
  const { zcene, antialias, engineOptions, adaptToDeviceRatio, sceneOptions, ...rest } = props;

  useEffect(() => {
    if (refCanvas.current) {
      let canvas = refCanvas.current;
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      let z;
      const engine = new Engine(refKanvas.current, antialias, engineOptions, adaptToDeviceRatio);
      const scene = new Scene(engine, sceneOptions);

      let shellB = ShellB();
      shellB.init(canvas, config);

      const resize = () => {
        console.log(`---- resize ${new Date()}`);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        shellB.getEngine().resize();
      }

      resize();

      if (window) {
        window.addEventListener("resize", resize);
      }

      return () => {
        shellB.getEngine().dispose();

        if (window) {
          window.removeEventListener("resize", resize);
        }
      };
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refCanvas]);

  return <canvas ref={refCanvas} {...rest} />;
};

export default Canvas;
