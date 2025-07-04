১. Accordion

<div id="accordion">
  <h3>Section 1</h3>
  <div><p>Content 1</p></div>
  <h3>Section 2</h3>
  <div><p>Content 2</p></div>
</div>
<script>
  $("#accordion").accordion();
</script>


---

২. Autocomplete

<input id="tags">
<script>
  var availableTags = ["Apple", "Banana", "Cherry", "Date"];
  $("#tags").autocomplete({ source: availableTags });
</script>


---

৩. Datepicker

<input type="text" id="datepicker">
<script>
  $("#datepicker").datepicker();
</script>


---

৪. Dialog

<div id="dialog" title="Dialog Title">
  <p>This is a dialog box.</p>
</div>
<script>
  $("#dialog").dialog();
</script>


---

৫. Slider

<div id="slider"></div>
<script>
  $("#slider").slider();
</script>


---

৬. Progressbar

<div id="progressbar"></div>
<script>
  $("#progressbar").progressbar({
    value: 70
  });
</script>


---

৭. Tabs

<div id="tabs">
  <ul>
    <li><a href="#tab1">Tab 1</a></li>
    <li><a href="#tab2">Tab 2</a></li>
  </ul>
  <div id="tab1"><p>Content of Tab 1</p></div>
  <div id="tab2"><p>Content of Tab 2</p></div>
</div>
<script>
  $("#tabs").tabs();
</script>


---

৮. Tooltip

<p><a href="#" title="Tooltip Text">Hover me</a></p>
<script>
  $(document).tooltip();
</script>


---

৯. Menu

<ul id="menu">
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Services</a></li>
</ul>
<script>
  $("#menu").menu();
</script>s