const form = document.getElementById('jobForm');
const tableBody = document.querySelector('#applicationsTable tbody');
const API_URL = "http://localhost:5000/applications";

async function loadApplications() {
  const res = await fetch(API_URL);
  const applications = await res.json();
  tableBody.innerHTML = '';
  applications.forEach((app, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${app.company}</td>
      <td>${app.position}</td>
      <td>${app.dateApplied}</td>
      <td>${app.status}</td>
      <td>${app.notes || ''}</td>
      <td><button onclick="deleteApplication(${index})">🗑 Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const appData = {
    company: document.getElementById('company').value,
    position: document.getElementById('position').value,
    dateApplied: document.getElementById('dateApplied').value,
    status: document.getElementById('status').value,
    notes: document.getElementById('notes').value
  };
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(appData)
  });
  form.reset();
  loadApplications();
});

async function deleteApplication(index) {
  alert("Delete functionality can be added later with backend");
}

loadApplications();
