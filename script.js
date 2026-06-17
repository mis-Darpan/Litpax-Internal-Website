const DATA = {
  forms: [
    ['Dealership Enquiry','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSe9OFM7h6x_Vz8pjnAP_JIpkNeKvZjh95CAxe0sNsyhpXgCpA/viewform'],
    ['Material Requirement','Google Form','https://docs.google.com/forms/d/e/1FAIpQLScblrHQPryc_B5pt3s-zvAyPiqMl5Q9dzzPpvacd3qA5zNW2Q/viewform'],
    ['Dispatch Clearance Form','Google Form','https://docs.google.com/forms/d/e/1FAIpQLScwBjsS0SDRnIsX2G3MZkkQE9HFwqFCrKGRH1gVHW7isig_ZQ/viewform'],
    ['Courier In/Out Form','Google Form','https://docs.google.com/forms/d/e/1FAIpQLScQP03W2Vlp7L85YyVuNApxxvgO1GZkKLJ84luqus0pfz2scQ/viewform'],
    ['Petty Payments Form','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSeNoYcIz-wh5AjRTgBR8aB8MRmeR4yVD2AFzWR6f4BDiI1KtA/viewform'],
    ['Material Requirement Repair','Google Form','https://docs.google.com/forms/u/1/d/e/1FAIpQLSd22GvnrY5Sxyh2dUt7y_koY0qRcUyvgYrHDThhv3fIAoLdzg/viewform?usp=dialog'],
    ['Suggestion & Issue Form','Google Form','https://docs.google.com/forms/u/1/d/e/1FAIpQLScPzdTip2fduZfhRvYZSmzJKE_yb1jDOQkoKwJRCIxem_CxJA/viewform?usp=send_form'],
    ['Raw Material Transport','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSeWLKsC4qZruut4Ov0mCe5LTtzCPgnqhPk5CEORp395OuZESw/formResponse'],
    ['Raw Material Inward Form','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSdCmSg0wf4fklP-Sbp8jQgRN3vnTOON6GqPvXYQAROgkVQ0GA/formResponse'],
    ['Battery Packing Information','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSfuZYyKv1fvwKZqkk-Gznipd4vYvkMlPS0BkdVvOI5YWmvgxA/viewform?usp=dialog'],
    ['Rajesh Enterprises Litpax Form','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSeg-3AXsEozNaHF1Bd1emJ0gsDrWhIL7ZPYfIrf6Y4IWXju1w/viewform?usp=dialog'],
    ['Supplier Payment Form','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSc4jcqRYbXsD0TT8x9BtdJu9G4ynwEIzCyDh9TFBfW_b13aAQ/viewform?usp=dialog'],
    ['Advance Replacement Form','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSfiO6fVHtltr_TaTHRnXBpogCO54KOOTnb7UCZ-lhMIEGj4bw/viewform?usp=dialog'],
    ['Interviewer Entry Form','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSfl0frLQf-VXYRL07LkLFbrJxVXAxhw0AKOaCG3OMxeb3APvQ/viewform?usp=dialog'],
    ['Employee Advance Request Form','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSdY-1dRa1MPec6_YPvR_nBHMLmMLRkxqzWZFMb_ilRtwxqwpQ/viewform'],
    ['Material Gatepass Form','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSfDuPg5YMG1O-nGmNu2Cl63RvNDmSssQATpbOYn5rXGQ3xVjg/viewform']
  ],

  erp: [
    ['Litpax ERP','Order to delivery ERP system','https://mis-darpan.github.io/LitpaxERP/index.html','↗'],
  ],

  webForms: [
    ['Field Service Support','Raise technician support tickets and field service requests','https://mis-darpan.github.io/litpax-support-ticket-system/','↗'],
    ['Repair Form','Create and manage repair related requests','https://mis-darpan.github.io/repairformlitpax/','↗'],
    ['Service Calls Form','Manage service requests, complaints and support entries','https://mis-darpan.github.io/ServiceCallsWebForm/','↗'],
    ['Dealership Enquiry Form','Submit dealership and distributor partnership enquiries','https://mis-darpan.github.io/Dealership-Agreement-Web-Form/','↗']
  ],

  mainSheets: [
    ['Stock Sheet','Google Sheet','https://docs.google.com/spreadsheets/d/1-RIiXIEDFvIdw84SHifI8iCMiooegmTsGQsd0RgeWuI/edit?gid=584720689#gid=584720689']
  ],

  orderSheets: [
    ['Sales Department','Order Flow Sheet','https://docs.google.com/spreadsheets/d/19TlBMYs8LS_COjqIjCvPaFzTNcpmhAE5q1odACOi__4/edit?gid=971562839#gid=971562839'],
    ['Production Department','Order Flow Sheet','https://docs.google.com/spreadsheets/d/1znTaVQNuqgSFWkkNrJ1IIs216cfeXH00GfE33T6XLfg/edit?gid=0#gid=0'],
    ['Accounts Department','Order Flow Sheet','https://docs.google.com/spreadsheets/d/1r64_4aWJ_ePgWOrMPTc9y5YxPUEHdC2ssq1X7mAtihA/edit?gid=0#gid=0'],
    ['Dispatch Department','Order Flow Sheet','https://docs.google.com/spreadsheets/d/14Y7DjL72EJGkAJgRxtt5I4uw_6cgaeTm5shpmJthDW4/edit?gid=0#gid=0']
  ],

  responses: [
    ['Dealership Enquiry Response','Response Sheet','https://docs.google.com/spreadsheets/d/1y2v5qbvTc7Mnb7lgxRlKYdL8B0t1Mdsaw4j5dTGYGN4/edit?gid=819191422#gid=819191422'],
    ['Material Required Response','Response Sheet','https://docs.google.com/spreadsheets/d/1zC4MmpJ9O3oz82D47_dQWNIvDA6L0aJ33rr60vsqrgs/edit?gid=881168244#gid=881168244'],
    ['Dispatch Clearance Responses','Response Sheet','https://docs.google.com/spreadsheets/d/1hbUmzZClbHIquP0T_3VuCYD4LN8fkLpn3EoC9TLgjNo/edit?resourcekey=&gid=419582696#gid=419582696'],
    ['Courier In/Out Responses','Response Sheet','https://docs.google.com/spreadsheets/d/1PdlPuAuYhLwjcUSN1rLOvZB6XUBhV2v3Y_tBwLalgY8/edit?gid=540481137#gid=540481137'],
    ['Petty Payment Responses','Response Sheet','https://docs.google.com/spreadsheets/d/1rRnM0weLZufqgneM1ZzZ-W2jGp0yrlRJ0U0A73Jl1Jg/edit?gid=1873300550#gid=1873300550'],
    ['Material Required Repair Response','Response Sheet','https://docs.google.com/spreadsheets/d/1XnEiXUe7wVBEu8LYxrVOn1qfdV4dtWC9zkPuf9N1qRY/edit?gid=758946040#gid=758946040'],
    ['Suggestion and Issue Response','Response Sheet','https://docs.google.com/spreadsheets/d/1BGpNEVyB4_V62bvFvYGIepTAUmAOwYLZd7wB6BV-NaM/edit?gid=1013807248#gid=1013807248'],
    ['Raw Material Transport Responses','Response Sheet','https://docs.google.com/spreadsheets/d/1mvTlEc1ItwUhW8C-WM8D6BolQmN-7KpCQlWPxQ1d03s/edit?resourcekey=&gid=1247342428#gid=1247342428'],
    ['Rajesh Enterprises Litpax Response','Response Sheet','https://docs.google.com/spreadsheets/d/1u2_Rai0ny-EAwjbQI1oaLQ9zofKj_S5jMJCOYFOUEZM/edit?gid=815049016#gid=815049016'],
    ['Supplier Payment Response','Response Sheet','https://docs.google.com/spreadsheets/d/1hI03vzLHNJUPTmhV1wB8iKguqpfcUivv7aUQfviRYW0/edit?gid=1705418553#gid=1705418553'],
    ['Advance Replacement Response','Response Sheet','https://docs.google.com/spreadsheets/d/18n8V45mXeRUIwCqnFrA_zcFBJ-8xGjDlTDYs_7rj3DY/edit?gid=1602038940#gid=1602038940'],
    ['Interviewer Entry Response','Response Sheet','https://docs.google.com/spreadsheets/d/1a09fcVRyT4vz3QS3O3avWDq_bZ9zXDfPdWyFMFP6kCA/edit?gid=1539020083#gid=1539020083'],
    ['Employee Advance Request Responses','Response Sheet','https://docs.google.com/spreadsheets/d/1Py93T5z1yI1qN0a_49_P1ZGBQyJxNovZdxPG8B5gvUs/edit?gid=1195204291#gid=1195204291'],
    ['Material Gatepass Responses','Response Sheet','https://docs.google.com/spreadsheets/d/1rS9YJdeuMUjC80SOm0WKlI47jBohqmK8gt9QukrVv50/edit?gid=1932924245#gid=1932924245']
  ],

  ims: [
    ['Inventory Management System','Stock availability, inward/outward material movement and warehouse records','https://mis-darpan.github.io/IMS/','▦']
  ],

  checklist: [
    ['Master Checklist File','Open the main checklist file for daily checking and verification','https://docs.google.com/spreadsheets/d/1ayhBVTC269_vNNSAyiNYD-lAjbRj8xVKm9_AfoCYCkE/edit?gid=2092959791#gid=2092959791','☑']
  ],

  fms: [
    ['Bar Code Generation FMS','Barcode generation and production tracking system','https://docs.google.com/spreadsheets/d/17z88rv9VASDJy956wc-O3s7XV0qxscmuKdou2PR2PaM/edit?gid=0#gid=0','▣'],
    ['Generated Bar Code for Billing FMS','Generated barcode and billing management sheet','https://docs.google.com/spreadsheets/d/1QagqV8Oaxv_CTLgTBjroKlG7cJQ6nPuG5WYI5zERVuU/edit?gid=0#gid=0','▣'],
    ['2 Wheeler Production FMS','Production workflow and output tracking','https://docs.google.com/spreadsheets/d/1uaZOMO8n0mWBKsJAa4JtROKkU7Gq8sOTH1y6Cj83Cq0/edit?gid=811920351#gid=811920351','⇄'],
    ['Production Slip FMS','Production Slip workflow monitoring','https://docs.google.com/spreadsheets/d/1fh6S6G9wwc9sKc4vbQmiFOHQZwa1RhNaYoIo2klo8Hw/edit?gid=1461042224#gid=1461042224','⇄'],
    ['O to D FMS','Order to Delivery workflow monitoring','https://docs.google.com/spreadsheets/d/1Qnz-_Yqtj_GMd2s-z2BBRC9GH89UBBS0vdxLwzRfd-w/edit?gid=0#gid=0','⇄']
  ],

  repairForms: [
    ['Field Service Support','Raise technician support tickets and field service requests','https://mis-darpan.github.io/litpax-support-ticket-system/','↗'],
    ['Repair Form','Create and manage repair related requests','https://mis-darpan.github.io/repairformlitpax/','↗'],
    ['Service Calls Form','Manage service requests, complaints and support entries','https://mis-darpan.github.io/ServiceCallsWebForm/','↗']
  ],

  repairSheets: [
    ['Repair Sheet','Google Sheet','https://docs.google.com/spreadsheets/d/1ythER3lvxeUS-ke6h_KC-1l8855sQQuiiZ4eQ2BzE5M/edit?gid=0#gid=0'],
    ['Service Sheet','Google Sheet','https://docs.google.com/spreadsheets/d/1POqxaWq3v1nk0mZF0-e7KhKrHbX_AlMWqUewk17tm0s/edit?gid=2116141456#gid=2116141456']
  ],

  repairResponses: [
    ['Litpax Support Ticket Response','Response Sheet','https://docs.google.com/spreadsheets/d/1L_XvlvqsjRJ6sDXxABkb8RITGzrtRcth9xtZWuuMpJ8/edit?gid=0#gid=0']
    
  ],

  webFormResponses: [
    ['Field Service Support Tickets','Response Sheet','https://docs.google.com/spreadsheets/d/1L_XvlvqsjRJ6sDXxABkb8RITGzrtRcth9xtZWuuMpJ8/edit?gid=0#gid=0'],
    ['Repair Form Response','Response Sheet','https://docs.google.com/spreadsheets/d/1ythER3lvxeUS-ke6h_KC-1l8855sQQuiiZ4eQ2BzE5M/edit?gid=0#gid=0'],
    ['Service Calls Response','Response Sheet','https://docs.google.com/spreadsheets/d/1POqxaWq3v1nk0mZF0-e7KhKrHbX_AlMWqUewk17tm0s/edit?gid=2116141456#gid=2116141456'],
    ['Dealership Enquiry Web Form Response','Response Sheet','https://docs.google.com/spreadsheets/d/1y2v5qbvTc7Mnb7lgxRlKYdL8B0t1Mdsaw4j5dTGYGN4/edit?gid=819191422#gid=819191422']
  ],

  charts: {
    payments: {
      groups: [
        {
          label: 'Petty Payments',
          charts: [
            ['Expense Breakdown by Purpose','https://docs.google.com/spreadsheets/d/e/2PACX-1vRd5S-T41DFVGj92I-_lWEVt2c1AoaGXgwgPFCahCWfJXPVVa6U0LMXdrvi8LDvfrVqARPr6SLGQM8h/pubchart?oid=1728129396&format=interactive'],
            ['Advance vs Total Expense','https://docs.google.com/spreadsheets/d/e/2PACX-1vRd5S-T41DFVGj92I-_lWEVt2c1AoaGXgwgPFCahCWfJXPVVa6U0LMXdrvi8LDvfrVqARPr6SLGQM8h/pubchart?oid=783735950&format=interactive']
          ]
        },
        {
          label: 'Employee Advance',
          charts: [
            ['Total Advance Given','https://docs.google.com/spreadsheets/d/e/2PACX-1vSNwFRHRqRgUjlzmx_nd6OAvNGcnEbNNSozpnXmjsps5dBrJab1XrRbXl_zt_BVNOAOGRQpKpduNl1w/pubchart?oid=2134041976&format=interactive'],
            ['Employee Wise Advance','https://docs.google.com/spreadsheets/d/e/2PACX-1vSNwFRHRqRgUjlzmx_nd6OAvNGcnEbNNSozpnXmjsps5dBrJab1XrRbXl_zt_BVNOAOGRQpKpduNl1w/pubchart?oid=1177165219&format=interactive']
          ]
        },
        {
          label: 'Raw Material Advance',
          charts: [
            ['Raw Material Advance Given vs Expense','https://docs.google.com/spreadsheets/d/e/2PACX-1vQpK_KBwbGg9Vsmo3VUa8Abn1Jyu1L6YRtlX8mriIRGWzgrVjIZl8-EnUgFoW_IuIWw64QQDZfm6PsS/pubchart?oid=1953461556&format=interactive']
          ]
        }
      ]
    },
    courier: [
      ['Last 3 Days — Courier In vs Out','https://docs.google.com/spreadsheets/d/e/2PACX-1vTag9IkTVRF7_9yEo2cdPwhxvbrIToJtbIO6Y-yk_YsCCgao4Hf1Wlw9GJZfoGY0rCPz5mXH79I1F85/pubchart?oid=1866253700&format=interactive'],
      ['State-wise Dispatch','https://docs.google.com/spreadsheets/d/e/2PACX-1vTag9IkTVRF7_9yEo2cdPwhxvbrIToJtbIO6Y-yk_YsCCgao4Hf1Wlw9GJZfoGY0rCPz5mXH79I1F85/pubchart?oid=669325212&format=interactive'],
      ['Courier Company — Charges vs Actual','https://docs.google.com/spreadsheets/d/e/2PACX-1vTag9IkTVRF7_9yEo2cdPwhxvbrIToJtbIO6Y-yk_YsCCgao4Hf1Wlw9GJZfoGY0rCPz5mXH79I1F85/pubchart?oid=518797100&format=interactive']
    ],
    repair: [
      ['Total Qty vs Repaired Qty','https://docs.google.com/spreadsheets/d/e/2PACX-1vR87kYg0Gurra1Oku60LqsPyOsD_N1aduilR_QHKj5Dr6OQ0DkjWjGa8XDj3WBh7hFuU2pzincTUMEd/pubchart?oid=57921950&format=interactive'],
      ['Battery & Charger Repair Summary','https://docs.google.com/spreadsheets/d/e/2PACX-1vR87kYg0Gurra1Oku60LqsPyOsD_N1aduilR_QHKj5Dr6OQ0DkjWjGa8XDj3WBh7hFuU2pzincTUMEd/pubchart?oid=1310779759&format=interactive'],
      ['Most Common Problems Count','https://docs.google.com/spreadsheets/d/e/2PACX-1vR87kYg0Gurra1Oku60LqsPyOsD_N1aduilR_QHKj5Dr6OQ0DkjWjGa8XDj3WBh7hFuU2pzincTUMEd/pubchart?oid=152787296&format=interactive'],
      ['Daily Received vs Dispatched Batteries','https://docs.google.com/spreadsheets/d/e/2PACX-1vR87kYg0Gurra1Oku60LqsPyOsD_N1aduilR_QHKj5Dr6OQ0DkjWjGa8XDj3WBh7hFuU2pzincTUMEd/pubchart?oid=50719008&format=interactive'],
      ['Battery Qty and Charger Qty Received','https://docs.google.com/spreadsheets/d/e/2PACX-1vR87kYg0Gurra1Oku60LqsPyOsD_N1aduilR_QHKj5Dr6OQ0DkjWjGa8XDj3WBh7hFuU2pzincTUMEd/pubchart?oid=1780959702&format=interactive'],
      ['Daily Battery Type Receiving Summary','https://docs.google.com/spreadsheets/d/e/2PACX-1vR87kYg0Gurra1Oku60LqsPyOsD_N1aduilR_QHKj5Dr6OQ0DkjWjGa8XDj3WBh7hFuU2pzincTUMEd/pubchart?oid=2091678534&format=interactive']
    ]
  }
};

const TITLES = {
  home:      'Internal Portal',
  forms:     'Forms',
  sheets:    'Sales & Marketing',
  repair:    'Repair & Services',
  responses: 'Response Sheets',
  dashboard: 'Dashboards',
  admin:     'Admin Tools'
};

function setHTML(id, html){
  const el = document.getElementById(id);
  if(el) el.innerHTML = html;
}

function toolCard(item){
  const [name,type,url] = item;
  return `
    <a class="tool-card searchable" href="${url}" target="_blank" data-search="${name} ${type}">
      <div class="tool-content">
        <h4>${name}</h4>
        <p>${type}</p>
      </div>
      <div class="tool-type">›</div>
    </a>
  `;
}

function featureCard(item){
  const [name,desc,url,icon] = item;
  return `
    <a class="feature-card searchable" href="${url}" target="_blank" data-search="${name} ${desc}">
      <div class="feature-left">
        <div class="feature-icon">${icon}</div>
        <div>
          <h4>${name}</h4>
          <p>${desc}</p>
        </div>
      </div>
      <span class="open-link">Open</span>
    </a>
  `;
}

function chartCard(item){
  const [title,url] = item;
  return `
    <div class="chart-card searchable" data-search="${title}">
      <div class="chart-head">
        <h4>${title}</h4>
        <span class="chart-dot"></span>
      </div>
      <div class="chart-wrap">
        <iframe src="${url}" loading="lazy" scrolling="no"></iframe>
      </div>
    </div>
  `;
}

function paymentsGroupedHTML(){
  return DATA.charts.payments.groups.map(group => `
    <div class="group-block">
      <h3>${group.label}</h3>
      <div class="chart-grid" style="grid-template-columns: repeat(auto-fit,minmax(min(480px,100%),1fr));">
        ${group.charts.map(chartCard).join('')}
      </div>
    </div>
  `).join('');
}

function render(){
  setHTML('formsGrid',       DATA.forms.map(toolCard).join(''));
  setHTML('webFormsGrid',    DATA.webForms.map(featureCard).join(''));
  setHTML('mainSheetsGrid',  DATA.mainSheets.map(toolCard).join(''));
  setHTML('orderSheetsGrid', DATA.orderSheets.map(toolCard).join(''));
  setHTML('responsesGrid',        DATA.responses.map(toolCard).join(''));
  setHTML('webFormResponsesGrid', DATA.webFormResponses.map(toolCard).join(''));
  setHTML('imsGrid',         DATA.ims.map(featureCard).join(''));
  setHTML('checklistGrid',   DATA.checklist.map(featureCard).join(''));
  setHTML('fmsGrid',         DATA.fms.map(featureCard).join(''));
  setHTML('erpGrid',         DATA.erp.map(featureCard).join(''));

  // Repair & Services
  setHTML('repairFormsGrid',     DATA.repairForms.map(featureCard).join(''));
  setHTML('repairSheetsGrid',    DATA.repairSheets.map(toolCard).join(''));
  setHTML('repairResponsesGrid', DATA.repairResponses.map(toolCard).join(''));

  // Charts
  setHTML('paymentsCharts', paymentsGroupedHTML());
  setHTML('courierCharts',  `<div class="chart-grid">${DATA.charts.courier.map(chartCard).join('')}</div>`);
  setHTML('repairCharts',   `<div class="chart-grid">${DATA.charts.repair.map(chartCard).join('')}</div>`);
}

function showSection(name){
  document.querySelectorAll('.section-panel').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.home-only').forEach(s => s.classList.remove('active'));

  if(name === 'home'){
    document.getElementById('section-home')?.classList.add('active');
    document.querySelectorAll('.home-only').forEach(s => s.classList.add('active'));
  } else {
    document.getElementById('section-' + name)?.classList.add('active');
  }

  document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.nav-link[data-section="${name}"]`)?.classList.add('active');

  const title = document.getElementById('pageTitle');
  if(title) title.textContent = TITLES[name] || 'Internal Portal';

  const search = document.getElementById('portalSearch');
  if(search) search.value = '';

  filterCards('');
  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterCards(query){
  const q = query.trim().toLowerCase();
  const cards = document.querySelectorAll('.searchable');
  let visible = 0;
  cards.forEach(card => {
    const text = (card.dataset.search || card.textContent).toLowerCase();
    const match = !q || text.includes(q);
    card.classList.toggle('hide-by-search', !match);
    if(match) visible++;
  });
  const noResults = document.getElementById('noResults');
  if(noResults) noResults.style.display = q && visible === 0 ? 'flex' : 'none';
}

function showDash(name){
  document.querySelectorAll('.dash-tab').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.dash-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelector(`.dash-tab[data-dash="${name}"]`)?.classList.add('active');
  document.getElementById('dash-' + name)?.classList.add('active');
}

function toggleSidebar(){
  document.getElementById('sidebar')?.classList.toggle('open');
  document.getElementById('overlay')?.classList.toggle('open');
}

function closeSidebar(){
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('overlay')?.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
  render();

  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.addEventListener('click', () => showSection(btn.dataset.section));
  });

  document.querySelectorAll('[data-section-jump]').forEach(el => {
    el.addEventListener('click', () => showSection(el.dataset.sectionJump));
  });

  document.querySelectorAll('.dash-tab').forEach(btn => {
    btn.addEventListener('click', () => showDash(btn.dataset.dash));
  });

  document.getElementById('portalSearch')?.addEventListener('input', e => filterCards(e.target.value));
  document.getElementById('menuBtn')?.addEventListener('click', toggleSidebar);
  document.getElementById('overlay')?.addEventListener('click', closeSidebar);
});
