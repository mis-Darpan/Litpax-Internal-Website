const GAS_QUERY_URL = 'https://script.google.com/macros/s/AKfycbwDT9TscyVVnILd9DObtN0jpe64kRIWH0-kbQUtK4R5pC3Qm8rZe5XPjLPio41fMUK3/exec';

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
    ['Material Gatepass Form','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSfDuPg5YMG1O-nGmNu2Cl63RvNDmSssQATpbOYn5rXGQ3xVjg/viewform'],
    ['External Material Request Form','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSdFrEg4I_-qCWy09zz3_03qYJpvsyZBKwuyCRSHUkR1dY79aA/viewform'],
    ['Delivery Challan Creation Form','Google Form','https://docs.google.com/forms/d/e/1FAIpQLSdYlpdg4pfcmvpYrTAjLlXHrldDgwdY_sTwxf_G_DIGFMxNFA/viewform']
  ],

  erp: [
    ['Litpax ERP','Order to delivery ERP system','https://litpax-technology.github.io/LitpaxERP/index.html','↗'],
  ],

  webForms: [
    ['Field Service Support','Raise technician support tickets and field service requests','https://litpax-technology.github.io/litpax-support-ticket-system/','↗'],
    ['Repair Form','Create and manage repair related requests','https://litpax-technology.github.io/repairformlitpax/','↗'],
    ['Service Calls Form','Manage service requests, complaints and support entries','https://litpax-technology.github.io/ServiceCallsWebForm/','↗'],
    ['Dealership Enquiry Form','Submit dealership and distributor partnership enquiries','https://litpax-technology.github.io/Dealership-Agreement-Web-Form/','↗'],
    ['Scrap Clearance Form','Scrap material clearance and disposal form','https://litpax-technology.github.io/Scrap-Clearance-Form/','↗'],
    ['Battery Exchange Tracker','Battery exchange records and tracking system','https://litpax-technology.github.io/Battery-Exchange-Tracker/','↗']
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
    ['Material Gatepass Responses','Response Sheet','https://docs.google.com/spreadsheets/d/1rS9YJdeuMUjC80SOm0WKlI47jBohqmK8gt9QukrVv50/edit?gid=1932924245#gid=1932924245'],
    ['Warivo Litpax','Response Sheet','https://docs.google.com/spreadsheets/d/1-bg8kLFZ6VBvxx9zgh_xAVNkfAGmuKBYnbZ8LW6vzMo/edit?gid=225535915#gid=225535915'],
    ['Rajesh Enterprises Repairing','Response Sheet','https://docs.google.com/spreadsheets/d/106m4B-SsXRKtJP0pdb8tm-kjOKkNWRUCU83TEFA7OSs/edit?gid=728254061#gid=728254061'],
    ['Rajesh Enterprises Litpax','Response Sheet','https://docs.google.com/spreadsheets/d/1u2_Rai0ny-EAwjbQI1oaLQ9zofKj_S5jMJCOYFOUEZM/edit?gid=815049016#gid=815049016'],
    ['External Material Request','Kapil Response Sheet','https://docs.google.com/spreadsheets/d/1eGaLODHHlPUek56tEY-M27UvwD5c8NlbRyHK2SmdxUw/edit?resourcekey=&gid=925853763#gid=925853763'],
    ['Delivery Challan Creation','Response Sheet','https://docs.google.com/spreadsheets/d/1GyNF5PwPx7xLhNvDnpmaY0dCl5uQBoNfmZeVaLg8Cgo/edit?gid=241043975#gid=241043975']
  ],

  ims: [
    ['Inventory Management System','Stock availability, inward/outward material movement and warehouse records','https://litpax-technology.github.io/IMS/','▦']
  ],

  checklist: [
    ['Master Checklist File','Open the main checklist file for daily checking and verification','https://docs.google.com/spreadsheets/d/1ayhBVTC269_vNNSAyiNYD-lAjbRj8xVKm9_AfoCYCkE/edit?gid=2092959791#gid=2092959791','☑'],
    ['All Checklists with Points','Complete checklist with scoring and points','https://litpax-technology.github.io/All-Checklists/','☑']
  ],

  fms: [
    ['Bar Code Generation FMS','Barcode generation and production tracking system','https://docs.google.com/spreadsheets/d/17z88rv9VASDJy956wc-O3s7XV0qxscmuKdou2PR2PaM/edit?gid=0#gid=0','▣'],
    ['Generated Bar Code for Billing FMS','Generated barcode and billing management sheet','https://docs.google.com/spreadsheets/d/1QagqV8Oaxv_CTLgTBjroKlG7cJQ6nPuG5WYI5zERVuU/edit?gid=0#gid=0','▣'],
    ['2 Wheeler Production FMS','Production workflow and output tracking','https://docs.google.com/spreadsheets/d/1uaZOMO8n0mWBKsJAa4JtROKkU7Gq8sOTH1y6Cj83Cq0/edit?gid=811920351#gid=811920351','⇄'],
    ['Production Slip FMS','Production Slip workflow monitoring','https://docs.google.com/spreadsheets/d/1fh6S6G9wwc9sKc4vbQmiFOHQZwa1RhNaYoIo2klo8Hw/edit?gid=1461042224#gid=1461042224','⇄'],
    ['O to D FMS','Order to Delivery workflow monitoring','https://docs.google.com/spreadsheets/d/1Qnz-_Yqtj_GMd2s-z2BBRC9GH89UBBS0vdxLwzRfd-w/edit?gid=0#gid=0','⇄'],
    ['Repair Dispatch Builty FMS','Repair Battery Dispatch Builty Tracking','https://docs.google.com/spreadsheets/d/189QqwxMvyzv6UTXJtDbOsPEHF7sFonn_ognI7nHr-Ns/edit?gid=278647415#gid=278647415','⇄'],
    ['PO FMS','PO Tracking','https://docs.google.com/spreadsheets/d/1anNUF8L_dNgVKQm58zaFf3TqdBB8conrThHLRObbZxY/edit?gid=0#gid=0','⇄'],
    ['Litpax Staff Queries FMS','Queries Tracking','https://docs.google.com/spreadsheets/d/1jkjBCS-lSfk9GNAZeOTptb_tM_EWgFXde3UWQsF-VSo/edit?gid=1837382195#gid=1837382195','⇄']
  ],

  repairForms: [
    ['Field Service Support','Raise technician support tickets and field service requests','https://litpax-technology.github.io/litpax-support-ticket-system/','↗'],
    ['Repair Form','Create and manage repair related requests','https://litpax-technology.github.io/repairformlitpax/','↗'],
    ['Service Calls Form','Manage service requests, complaints and support entries','https://litpax-technology.github.io/ServiceCallsWebForm/','↗'],
    ['Battery Exchange Tracker','Battery exchange records and tracking system','https://litpax-technology.github.io/Battery-Exchange-Tracker/','↗']
  ],

   

  repairResponses: [
    ['Litpax Support Ticket Response','Response Sheet','https://docs.google.com/spreadsheets/d/1L_XvlvqsjRJ6sDXxABkb8RITGzrtRcth9xtZWuuMpJ8/edit?gid=0#gid=0'],
    ['Repair Sheet','Google Sheet','https://docs.google.com/spreadsheets/d/1ythER3lvxeUS-ke6h_KC-1l8855sQQuiiZ4eQ2BzE5M/edit?gid=0#gid=0'],
    ['Service Sheet','Google Sheet','https://docs.google.com/spreadsheets/d/1POqxaWq3v1nk0mZF0-e7KhKrHbX_AlMWqUewk17tm0s/edit?gid=2116141456#gid=2116141456'],
    ['Battery Exchange Tracker Admin','Battery exchange records and tracking system','https://mis-darpan.github.io/Battery-Exchange-Tracker/admin.html','↗']
    
  ],

  webFormResponses: [
    ['Field Service Support Tickets','Response Sheet','https://docs.google.com/spreadsheets/d/1L_XvlvqsjRJ6sDXxABkb8RITGzrtRcth9xtZWuuMpJ8/edit?gid=0#gid=0'],
    ['Repair Form Response','Response Sheet','https://docs.google.com/spreadsheets/d/1ythER3lvxeUS-ke6h_KC-1l8855sQQuiiZ4eQ2BzE5M/edit?gid=0#gid=0'],
    ['Service Calls Response','Response Sheet','https://docs.google.com/spreadsheets/d/1POqxaWq3v1nk0mZF0-e7KhKrHbX_AlMWqUewk17tm0s/edit?gid=2116141456#gid=2116141456'],
    ['Dealership Enquiry Web Form Response','Response Sheet','https://docs.google.com/spreadsheets/d/1y2v5qbvTc7Mnb7lgxRlKYdL8B0t1Mdsaw4j5dTGYGN4/edit?gid=819191422#gid=819191422'],
    ['All Checklists with Points Response','Response Sheet','https://docs.google.com/spreadsheets/d/1NsBV465D1rfK-je-GH7AaEG3HEfNPE7vytHM1YiJK78/edit?gid=309174168#gid=309174168'],
    ['Battery Exchange Tracker Response','Response Sheet','https://docs.google.com/spreadsheets/d/1-DUrqY-3BP9QH0BTzt45OPjBbeFR-WFGQWYz5jLkrCQ/edit?gid=1758123938#gid=1758123938']
  ],

    departmentsHub: [
    ['Litpax Departments Hub','Department-wise employee portal — forms, notices and resources','https://litpax-technology.github.io/Litpax-Departments-Hub/','🏢'],
    ['Departments Hub Admin','Admin panel — manage departments, forms and notices','https://litpax-technology.github.io/Litpax-Departments-Hub/admin.html','⚙️']
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
      ['Daily Battery Type Receiving Summary','https://docs.google.com/spreadsheets/d/e/2PACX-1vR87kYg0Gurra1Oku60LqsPyOsD_N1aduilR_QHKj5Dr6OQ0DkjWjGa8XDj3WBh7hFuU2pzincTUMEd/pubchart?oid=2091678534&format=interactive'],
      ['Scrap Clearance Form Response','Response Sheet','https://docs.google.com/spreadsheets/d/1e9s9n2nMYr1bjN5a8QhMVaiJCU7cqbUJ80o2WIRZskw/edit?gid=416425349#gid=416425349'],
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
  admin:     'Admin Tools',
  queries:   'Staff Queries'
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
  setHTML('departmentsHubGrid', DATA.departmentsHub.map(featureCard).join(''));
  setHTML('repairFormsGrid',     DATA.repairForms.map(featureCard).join(''));
  setHTML('repairResponsesGrid', DATA.repairResponses.map(toolCard).join(''));
  setHTML('paymentsCharts', paymentsGroupedHTML());
  setHTML('courierCharts',  `<div class="chart-grid">${DATA.charts.courier.map(chartCard).join('')}</div>`);
  setHTML('repairCharts',   `<div class="chart-grid">${DATA.charts.repair.map(chartCard).join('')}</div>`);

  renderQuerySection();
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

// ─── STAFF QUERIES ───────────────────────────────

let allTickets = [];
let activeTicket = null;

function renderQuerySection() {
  const wrap = document.getElementById('queryFormWrap');
  if (!wrap) return;
  wrap.innerHTML = `
    <div style="display:flex;gap:16px;height:580px;">

      <!-- LEFT: Ticket List -->
      <div style="width:280px;flex-shrink:0;display:flex;flex-direction:column;border:1px solid var(--line);border-radius:var(--r-xl);overflow:hidden;background:var(--card);">
        <div style="padding:12px 14px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:12px;font-weight:700;color:var(--tx);">All Queries</span>
          <button onclick="loadAllTickets()" style="background:var(--acc);color:#fff;border:none;padding:5px 12px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;font-family:inherit;">Refresh</button>
        </div>
        <div style="padding:8px;border-bottom:1px solid var(--line);">
          <select id="statusFilter" onchange="filterTickets()" style="width:100%;padding:6px 10px;border:1px solid var(--line2);border-radius:6px;font-size:11px;font-family:inherit;outline:none;background:var(--bg);">
            <option value="">All Status</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div id="ticketListPane" style="flex:1;overflow-y:auto;"></div>
      </div>

      <!-- RIGHT: Chat View -->
      <div style="flex:1;display:flex;flex-direction:column;border:1px solid var(--line);border-radius:var(--r-xl);overflow:hidden;background:var(--card);">
        <div id="chatHeader" style="padding:14px 18px;border-bottom:1px solid var(--line);background:var(--bg);">
          <p style="font-size:12px;color:var(--muted);text-align:center;">← Query select karo</p>
        </div>
        <div id="chatBody" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;"></div>
        <div id="chatFooter" style="border-top:1px solid var(--line);padding:12px 16px;display:none;background:var(--card);">
  <div style="display:flex;gap:10px;align-items:flex-end;">
    <textarea id="ownerReply" rows="2" onkeydown="handleReplyKey(event)" placeholder="Response likho... (Shift+Enter = New Line)" style="flex:1;padding:10px 14px;border:1px solid var(--line2);border-radius:10px;font-size:13px;font-family:inherit;outline:none;resize:none;background:var(--bg);color:var(--tx);transition:border-color .14s;" onfocus="this.style.borderColor='var(--acc)'" onblur="this.style.borderColor='var(--line2)'"></textarea>
    <button onclick="sendResponse('temp')" style="height:42px;padding:0 18px;background:var(--acc);color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;white-space:nowrap;transition:.14s;" onmouseover="this.style.background='var(--acc2)'" onmouseout="this.style.background='var(--acc)'">Send ↑</button>
  </div>
  <div style="display:flex;align-items:center;gap:8px;margin-top:10px;">
    <span style="font-size:11px;font-weight:600;color:var(--muted);">Stage:</span>
    <div style="display:flex;gap:6px;">
      <button onclick="changeStatus('Open')" id="stageOpen" style="padding:5px 12px;border-radius:999px;font-size:11px;font-weight:600;cursor:pointer;font-family:inherit;border:1px solid #fecaca;background:#fef2f2;color:#dc2626;transition:.14s;">Open</button>
      <button onclick="changeStatus('In Progress')" id="stageInProgress" style="padding:5px 12px;border-radius:999px;font-size:11px;font-weight:600;cursor:pointer;font-family:inherit;border:1px solid #fde68a;background:#fffbeb;color:#d97706;transition:.14s;">In Progress</button>
      <button onclick="changeStatus('Closed')" id="stageClosed" style="padding:5px 12px;border-radius:999px;font-size:11px;font-weight:600;cursor:pointer;font-family:inherit;border:1px solid #bbf7d0;background:#f0fdf4;color:#16a34a;transition:.14s;">✓ Close</button>
    </div>
  </div>
</div>
      </div>

    </div>
  `;

  // Hide the "My Queries" section — not needed for owner
  const listWrap = document.getElementById('queryListWrap');
  if (listWrap) listWrap.style.display = 'none';

  loadAllTickets();
}

async function loadAllTickets() {
  document.getElementById('ticketListPane').innerHTML = '<p style="font-size:11px;color:var(--muted);padding:12px;">Loading...</p>';
  try {
    const res = await fetch(GAS_QUERY_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'getAllTickets' })
    });
    const data = await res.json();
    allTickets = data.tickets || [];
    filterTickets();
  } catch(err) {
    document.getElementById('ticketListPane').innerHTML = '<p style="font-size:11px;color:red;padding:12px;">Error loading.</p>';
  }
}

function filterTickets() {
  const filter = document.getElementById('statusFilter')?.value || '';
  const filtered = filter ? allTickets.filter(t => t.Status === filter) : allTickets;
  const pane = document.getElementById('ticketListPane');
  if (!filtered.length) {
    pane.innerHTML = '<p style="font-size:11px;color:var(--muted);padding:12px;text-align:center;">Koi query nahi</p>';
    return;
  }
  const priorityDot = p => p==='Urgent'?'#dc2626':p==='Medium'?'#d97706':'#94a3b8';
  const statusBg = s => s==='Open'?'#fef2f2':s==='In Progress'?'#fffbeb':'#f0fdf4';
  const statusColor = s => s==='Open'?'#dc2626':s==='In Progress'?'#d97706':'#16a34a';

  pane.innerHTML = filtered.map(t => `
    <div onclick="openTicket('${t.TicketID}')" id="titem-${t.TicketID}" style="padding:12px 14px;border-bottom:1px solid var(--line);cursor:pointer;transition:.14s;${activeTicket===t.TicketID?'background:var(--acc-lt);':''}">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
        <span style="width:7px;height:7px;border-radius:50%;background:${priorityDot(t.Priority)};flex-shrink:0;"></span>
        <span style="font-size:11px;font-weight:700;color:var(--tx);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${t.Subject}</span>
      </div>
      <div style="font-size:10px;color:var(--muted);">${t['Employee Name']} · ${t.Department}${t['Request To'] ? ' → ' + t['Request To'] : ''}</div>
      <div style="margin-top:5px;">
        <span style="font-size:9px;font-weight:700;padding:2px 8px;border-radius:999px;background:${statusBg(t.Status)};color:${statusColor(t.Status)};">${t.Status}</span>
        <span style="font-size:9px;color:var(--soft);margin-left:6px;">${t.TicketID}</span>
      </div>
    </div>
  `).join('');
}

function openTicket(ticketID) {
  activeTicket = ticketID;
  const t = allTickets.find(x => x.TicketID === ticketID);
  if (!t) return;

  // Highlight selected
  document.querySelectorAll('[id^="titem-"]').forEach(el => el.style.background = '');
  const el = document.getElementById('titem-' + ticketID);
  if (el) el.style.background = 'var(--acc-lt)';

  // Header
  const statusColor = s => s==='Open'?'#dc2626':s==='In Progress'?'#d97706':'#16a34a';
  document.getElementById('chatHeader').innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
      <div>
        <div style="font-size:13px;font-weight:700;color:var(--tx);">${t.Subject}</div>
        <div style="font-size:11px;color:var(--muted);margin-top:2px;">${t['Employee Name']} · ${t.Department} · ${t.Priority} · ${t['Request To'] ? '→ ' + t['Request To'] : ''} · ${t.Timestamp}</div>
      </div>
      <span style="font-size:10px;font-weight:700;padding:4px 10px;border-radius:999px;background:${statusColor(t.Status)}22;color:${statusColor(t.Status)};border:1px solid ${statusColor(t.Status)}44;white-space:nowrap;">${t.Status}</span>
    </div>
  `;

  // Chat bubbles
  const chatBody = document.getElementById('chatBody');
  chatBody.innerHTML = '';

  // Employee message
  chatBody.innerHTML += bubble('left', t['Employee Name'], t.Description, t.Timestamp, '#eef2ff', '#3730a3');

  // Temp response
  if (t['Temp Response']) {
    chatBody.innerHTML += bubble('right', 'Owner', t['Temp Response'], '', '#fffbeb', '#92400e');
  }

  // Final response
  if (t['Final Response']) {
    chatBody.innerHTML += bubble('right', 'Owner (Final)', t['Final Response'], t['Closed Date'], '#f0fdf4', '#15803d');
  }

  // Closed message
  if (t.Status === 'Closed') {
    chatBody.innerHTML += `<div style="text-align:center;font-size:11px;color:var(--muted);padding:8px;">✅ Ticket closed — ${t['Closed Date']}</div>`;
    document.getElementById('chatFooter').style.display = 'none';
  } else {
    document.getElementById('chatFooter').style.display = 'block';
  }

  chatBody.scrollTop = chatBody.scrollHeight;
}

function bubble(side, name, text, time, bg, color) {
  const isRight = side === 'right';
  return `
    <div style="display:flex;flex-direction:column;align-items:${isRight?'flex-end':'flex-start'};">
      <div style="font-size:10px;color:var(--muted);margin-bottom:3px;${isRight?'text-align:right':''}">${name}</div>
      <div style="max-width:80%;padding:10px 14px;border-radius:${isRight?'14px 14px 4px 14px':'14px 14px 14px 4px'};background:${bg};color:${color};font-size:12.5px;line-height:1.55;font-weight:500;">${text}</div>
      ${time ? `<div style="font-size:10px;color:var(--soft);margin-top:3px;">${time}</div>` : ''}
    </div>
  `;
}

async function sendResponse(type) {
  const reply = document.getElementById('ownerReply').value.trim();
  if (!reply) return;
  if (!activeTicket) return;

  const payload = { action: 'respondTicket', ticketID: activeTicket };
  if (type === 'temp') {
    payload.tempResponse = reply;
    payload.status = 'In Progress';
  } else {
    payload.finalResponse = reply;
    payload.status = 'Closed';
  }

  try {
    await fetch(GAS_QUERY_URL, { method: 'POST', body: JSON.stringify(payload) });
    document.getElementById('ownerReply').value = '';
    await loadAllTickets();
    openTicket(activeTicket);
  } catch(err) {
    alert('Error sending response.');
  }
}

async function changeStatus(status) {
  if (!activeTicket) return;
  try {
    await fetch(GAS_QUERY_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'respondTicket', ticketID: activeTicket, status })
    });
    await loadAllTickets();
    openTicket(activeTicket);
  } catch(err) {
    alert('Error updating status.');
  }
}

function handleReplyKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendResponse('temp');
  }
}
