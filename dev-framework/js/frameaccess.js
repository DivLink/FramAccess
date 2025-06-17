function loadComponent(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      const container = document.getElementById(id);
      if (container) container.innerHTML = data;
    })
    .catch(err => console.error(`Failed to load ${id}:`, err));
}
