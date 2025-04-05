function show(elementId) {
    const target = document.getElementById(elementId);
    const allSections = document.querySelectorAll('.section');
  
    allSections.forEach(section => {
      section.style.display = 'none';
    });
  
    if (target) {
      target.style.display = 'block';
      document.body.className = elementId;
    }
  }
  
  