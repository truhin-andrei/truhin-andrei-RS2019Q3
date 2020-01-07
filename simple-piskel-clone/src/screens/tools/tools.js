const panelTools = document.getElementById('tools');
let activeTool;



function madeToolActive(tool) {
  activeTool = document.getElementById(tool);
  activeTool.dispatchEvent(eventClick);
  localStorage.setItem('tool', tool);
}
