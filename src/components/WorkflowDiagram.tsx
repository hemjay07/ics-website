import WorkflowSVG from "../../public/images/workflow.svg";

// Style and animation for the workflow diagram
const WorkflowDiagram = () => {
  // useEffect(() => {
  //   if (!svgRef.current) return

  //   // Get diagram elements
  //   const nodes = svgRef.current.querySelectorAll('.diagram-node')
  //   const connections = svgRef.current.querySelectorAll('.diagram-connection')
  //   const inLabels = svgRef.current.querySelectorAll('.in-label')
  //   const outLabels = svgRef.current.querySelectorAll('.out-label')

  //   // Create main timeline
  //   const tl = gsap.timeline({
  //     defaults: { ease: 'power3.out' },
  //     delay: 0.5 // Delay to let page load
  //   })

  //   // Set initial states (before animation)
  //   gsap.set(nodes, { opacity: 0, scale: 0.8 })
  //   gsap.set(connections, {
  //     opacity: 0,
  //     strokeDasharray: function(i, el) {
  //       const length = el.getTotalLength ? el.getTotalLength() : 100
  //       return length
  //     },
  //     strokeDashoffset: function(i, el) {
  //       const length = el.getTotalLength ? el.getTotalLength() : 100
  //       return length
  //     }
  //   })
  //   gsap.set([inLabels, outLabels], { opacity: 0 })

  //   // Sequence: first animate nodes
  //   tl.to(nodes, {
  //     opacity: 1,
  //     scale: 1,
  //     duration: 0.5,
  //     stagger: 0.08,
  //     ease: 'back.out(1.4)'
  //   })

  //   // Then animate connections
  //   .to(connections, {
  //     opacity: 1,
  //     strokeDashoffset: 0,
  //     duration: 0.8,
  //     stagger: 0.05
  //   }, '-=0.3')

  //   // Finally animate labels
  //   .to([inLabels, outLabels], {
  //     opacity: 1,
  //     duration: 0.3,
  //     stagger: 0.02
  //   }, '-=0.4')

  //   // Add data flow animation that repeats
  //   const dataFlowTimeline = gsap.timeline({
  //     repeat: -1,
  //     repeatDelay: 1,
  //     delay: 1
  //   })

  //   // Get all data-flow elements (if you have them in your SVG)
  //   const dataPoints = svgRef.current.querySelectorAll('.data-point')
  //   if (dataPoints.length > 0) {
  //     gsap.set(dataPoints, { opacity: 0, scale: 0 })

  //     dataFlowTimeline.to(dataPoints, {
  //       opacity: 1,
  //       scale: 1,
  //       duration: 0.3,
  //       stagger: 0.2,
  //       ease: 'back.out'
  //     })
  //     .to(dataPoints, {
  //       opacity: 0,
  //       scale: 0,
  //       duration: 0.3,
  //       stagger: 0.2,
  //       delay: 0.1
  //     }, '+=0.5')
  //   }

  //   // Setup interactive elements
  //   nodes.forEach(node => {
  //     // Add hover effects
  //     node.addEventListener('mouseenter', () => {
  //       gsap.to(node, { scale: 1.05, duration: 0.3 })
  //     })

  //     node.addEventListener('mouseleave', () => {
  //       gsap.to(node, { scale: 1, duration: 0.3 })
  //     })
  //   })

  //   return () => {
  //     // Clean up animations when component unmounts
  //     tl.kill()
  //     dataFlowTimeline.kill()
  //   }
  // }, [])

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
