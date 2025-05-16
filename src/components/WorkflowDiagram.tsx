import WorkflowSVG from "../../public/images/workflow.svg";

// Style and animation for the workflow diagram
const WorkflowDiagram = () => {
  return (
    <div className="mt-12 relative">
      <WorkflowSVG
        // ref={svgRef}
        className="w-full h-full opacity-0"
        preserveAspectRatio="xMidYMid slice"
        aria-label="ICS workflow diagram"
      />
    </div>
  );
};

export default WorkflowDiagram;
