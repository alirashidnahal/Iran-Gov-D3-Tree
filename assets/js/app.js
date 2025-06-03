function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('modalOverlay').style.display = 'none';
}

d3.json("data.json").then(data => {
  const svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

  const g = svg.append("g");
  const zoom = d3.zoom()
    .scaleExtent([0.5, 2])
    .on("zoom", (event) => g.attr("transform", event.transform));

  svg.call(zoom);

  const treeLayout = d3.tree().size([height - 100, width - 200]);
  const root = d3.hierarchy(data);
  treeLayout(root);

  const tooltip = d3.select("#tooltip");

  // Links
  g.selectAll(".link")
    .data(root.links())
    .join("path")
    .attr("class", "link")
    .attr("d", d3.linkHorizontal()
      .x(d => d.y)
      .y(d => d.x));

  // Nodes
  const node = g.selectAll(".node")
    .data(root.descendants())
    .join("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${d.y},${d.x})`)
    .attr("id", d => `node-${d.data.name.replace(/\s+/g, '-')}`);

  node.append("circle")
    .attr('cx', 1)
    .attr('cy', 1)
    .attr('r', 20)
    .attr('stroke', 'black')
    .attr('fill', d => `${d.data.color}`)
    .on("mouseover", (event, d) => {
      tooltip.style("display", "block")
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY + 10) + "px")
        .html(`<strong>${d.data.name}</strong><br>${d.data.description || ''}`);
    })
    .on("mouseout", () => tooltip.style("display", "none"))
    .on("click", (event, d) => {
      document.getElementById('modalTitle').textContent = d.data.name;
      document.getElementById('modalDescription').textContent = d.data.description || "توضیحی ثبت نشده است.";

      if (d.data.image) {
        document.getElementById('modalImage').src = d.data.image;
        document.getElementById('modalImage').style.display = 'block';
      } else {
        document.getElementById('modalImage').style.display = 'none';
      }

      if (d.data.link) {
        document.getElementById('modalLink').href = d.data.link;
        document.getElementById('modalLink').style.display = 'inline';
      } else {
        document.getElementById('modalLink').style.display = 'none';
      }

      document.getElementById('modal').style.display = 'block';
      document.getElementById('modalOverlay').style.display = 'block';
    });

  node.append("text")
    .attr("dy", 4)
    .attr("x", d => d.children ? -10 : 10)
    .style("text-anchor", d => d.children ? "end" : "start")
    .text(d => d.data.name);

  // جستجو
  document.getElementById('searchBox').addEventListener('input', function () {
    const term = this.value.trim();
    node.select("circle").attr("fill", d =>
      d.data.name.includes(term) ? "#e74c3c" : "#1f77b4"
    );
  });
});
