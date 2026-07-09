// -- Schedule Page

function switchDay(day, btn) {
  // Hide all days
  document.querySelectorAll('.schedule-day').forEach(d => d.classList.remove('active'));
  // Deactivate all tabs
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  // Activate selected day and tab
  document.getElementById('day' + day).classList.add('active');
  btn.classList.add('active');
}
