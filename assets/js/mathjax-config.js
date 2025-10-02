// MathJax Configuration - only load if usemathjax is true
(function() {
  // Check if this page has MathJax enabled
  var metaElement = document.querySelector('meta[name="usemathjax"]');
  var useMathJax = metaElement && metaElement.getAttribute('content') === 'true';
  
  // Also check for usemathjax in the page's front matter via a script tag
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].textContent.indexOf('usemathjax') !== -1) {
      useMathJax = true;
      break;
    }
  }
  
  // Check if page contains LaTeX syntax
  var bodyText = document.body ? document.body.textContent : '';
  var hasLatex = /\\[\[\(]|\\[\]\)]/.test(bodyText);
  
  if (useMathJax || hasLatex) {
    // Configure MathJax
    window.MathJax = {
      tex: {
        inlineMath: [['\\(', '\\)']],
        displayMath: [['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true
      },
      options: {
        ignoreHtmlClass: ".*",
        processHtmlClass: "arithmatex"
      }
    };

    // Load MathJax
    var script1 = document.createElement('script');
    script1.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
    script1.async = true;
    document.head.appendChild(script1);

    var script2 = document.createElement('script');
    script2.id = 'MathJax-script';
    script2.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script2.async = true;
    document.head.appendChild(script2);
  }
})();
