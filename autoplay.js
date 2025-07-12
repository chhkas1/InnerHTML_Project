document.addEventListener("DOMContentLoaded", function () {
      const iframe = document.getElementById("youtubeVideo");

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            iframe.src = iframe.getAttribute("data-src");
            observer.unobserve(iframe);
          }
        });
      });

      observer.observe(iframe);
    });